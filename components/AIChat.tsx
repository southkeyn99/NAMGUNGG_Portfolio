import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, User, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { streamChatResponse } from '../services/geminiService';
import { DIRECTOR_NAME } from '../constants';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Welcome. I am ${DIRECTOR_NAME.split(' ')[0]}'s digital assistant. Ask me anything about the films, the creative process, or upcoming projects.`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    // Add user message
    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: userText };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // Create placeholder for model response
      const responseId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: responseId, role: 'model', text: '', isStreaming: true }]);

      // Get history for context (excluding the just added placeholder)
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      
      const stream = await streamChatResponse(history, userText);
      
      let fullText = "";
      
      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => 
          prev.map(msg => 
            msg.id === responseId 
              ? { ...msg, text: fullText } 
              : msg
          )
        );
      }
      
      setMessages(prev => 
        prev.map(msg => 
          msg.id === responseId 
            ? { ...msg, isStreaming: false } 
            : msg
        )
      );

    } catch (error) {
      console.error("Chat Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai" className="py-24 bg-cinema-900 border-y border-stone-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-cinema-800 px-4 py-1 rounded-full mb-4 border border-cinema-accent/20">
            <Sparkles className="w-4 h-4 text-cinema-accent" />
            <span className="text-xs font-bold text-cinema-accent uppercase tracking-wider">AI Powered Interactive</span>
          </div>
          <h2 className="text-3xl font-serif text-white">Ask the Director</h2>
          <p className="text-stone-500 mt-2">Explore the vision behind the lens.</p>
        </div>

        {/* Chat Interface */}
        <div className="bg-stone-950 rounded-xl overflow-hidden shadow-2xl border border-stone-800">
          
          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === 'model' ? 'bg-cinema-accent/10 border border-cinema-accent/50 text-cinema-accent' : 'bg-stone-800 text-stone-400'
                }`}>
                  {msg.role === 'model' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </div>

                {/* Bubble */}
                <div className={`max-w-[80%] rounded-lg p-4 ${
                  msg.role === 'model' 
                    ? 'bg-cinema-800 text-stone-200 rounded-tl-none' 
                    : 'bg-stone-800 text-white rounded-tr-none'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  {msg.isStreaming && <span className="inline-block w-2 h-4 bg-cinema-accent ml-1 animate-pulse" />}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-cinema-900 border-t border-stone-800">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about themes, specific scenes, or inspiration..."
                className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-cinema-accent transition-colors"
                disabled={isLoading}
              />
              <button 
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="bg-cinema-accent text-cinema-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                <span className="hidden md:inline">Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;