import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { FILMS, DIRECTOR_NAME, DIRECTOR_BIO } from '../constants';

// Initialize Gemini Client
// In a real production app, ensure this is handled securely.
// For this portfolio demo, we assume the env var is present.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-2.5-flash';

// Construct a system instruction that gives the AI the persona of the Director
const SYSTEM_INSTRUCTION = `
You are an AI assistant representing the film director ${DIRECTOR_NAME}.
Your goal is to engage with visitors to the portfolio website, answering questions about ${DIRECTOR_NAME}'s films, artistic philosophy, and career.

Here is the director's bio: "${DIRECTOR_BIO}"

Here is the filmography data you have access to:
${JSON.stringify(FILMS.map(f => ({ title: f.title, year: f.year, genre: f.genre, logline: f.logline, synopsis: f.synopsis, role: f.role })))}

Guidelines:
1. Tone: Professional, artistic, slightly enigmatic but welcoming. Use cinematic terminology where appropriate (e.g., mise-en-scène, pacing, color grading).
2. If asked about a specific film in the list, use the synopsis and logline to provide details.
3. If asked about future projects, mention "Rust & Bone Dust" is in production.
4. If asked about contact info, politely guide them to the contact section of the website.
5. Keep responses concise (under 150 words) unless asked for a deep dive.
6. Do not invent films that are not in the provided list.
`;

export const streamChatResponse = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<AsyncIterable<string>> => {
  try {
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessageStream({ message: newMessage });

    // Generator function to yield text chunks
    async function* generate() {
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    }

    return generate();

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Return a generator that yields a friendly error message
    async function* errorGenerator() {
      yield "I apologize, but I'm having trouble connecting to the studio server right now. Please try again in a moment.";
    }
    return errorGenerator();
  }
};
