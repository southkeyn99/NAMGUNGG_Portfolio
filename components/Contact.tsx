import React from 'react';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-cinema-900 border-t border-stone-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Let's Create Together</h2>
            <p className="text-stone-400 mb-8 leading-relaxed">
              Available for feature films, music videos, and commercial projects. 
              Representation inquiries should be directed to the agency contact below.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-stone-300">
                <Mail className="w-5 h-5 text-cinema-accent" />
                <a href="mailto:hello@elenavance.com" className="hover:text-cinema-accent transition-colors">hello@elenavance.com</a>
              </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-cinema-accent hover:bg-cinema-accent/10 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-stone-500">Name</label>
                <input type="text" className="w-full bg-cinema-800 border border-stone-700 rounded p-3 text-white focus:border-cinema-accent focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-stone-500">Email</label>
                <input type="email" className="w-full bg-cinema-800 border border-stone-700 rounded p-3 text-white focus:border-cinema-accent focus:outline-none transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-stone-500">Subject</label>
               <select className="w-full bg-cinema-800 border border-stone-700 rounded p-3 text-white focus:border-cinema-accent focus:outline-none transition-colors">
                 <option>Project Inquiry</option>
                 <option>Press / Interview</option>
                 <option>Screening Request</option>
                 <option>Other</option>
               </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-stone-500">Message</label>
              <textarea rows={5} className="w-full bg-cinema-800 border border-stone-700 rounded p-3 text-white focus:border-cinema-accent focus:outline-none transition-colors"></textarea>
            </div>
            <button className="bg-white text-black px-8 py-3 rounded uppercase font-bold tracking-widest hover:bg-cinema-accent hover:text-black transition-colors w-full md:w-auto">
              Send Message
            </button>
          </form>

        </div>
        
        <div className="mt-24 pt-8 border-t border-stone-900 text-center text-stone-600 text-sm">
          &copy; {new Date().getFullYear()} Elena Vance. All rights reserved. Designed with Lumière.
        </div>
      </div>
    </section>
  );
};

export default Contact;