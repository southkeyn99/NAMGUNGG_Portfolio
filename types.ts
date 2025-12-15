export interface Award {
  name: string;
  year: number;
  icon?: string;
}

export interface Film {
  id: string;
  title: string;
  year: number;
  genre: string;
  duration: string;
  role: string[]; // e.g. ["Director", "Writer"]
  logline: string;
  synopsis: string;
  imageUrl: string; // Poster or still
  backdropUrl: string; // Wide image
  awards?: Award[];
  trailerUrl?: string; // Placeholder for embedded video
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export enum Section {
  HOME = 'home',
  WORK = 'work',
  ABOUT = 'about',
  CONTACT = 'contact',
  AI_CHAT = 'ai_chat'
}