import { Film } from './types';

export const DIRECTOR_NAME = "Elena Vance";
export const DIRECTOR_BIO = `Elena Vance is a visionary director known for her atmospheric storytelling and stark visual style. With a background in fine arts and a decade of experience in independent cinema, she explores themes of memory, isolation, and human resilience. Her debut feature, "Echoes of the Void," premiered at Sundance, marking her as a voice to watch. She believes cinema is not just about showing a story, but about making the audience breathe the same air as the characters.`;

export const FILMS: Film[] = [
  {
    id: 'f1',
    title: "Echoes of the Void",
    year: 2023,
    genre: "Psychological Thriller",
    duration: "1h 54m",
    role: ["Director", "Screenwriter"],
    logline: "A sound engineer discovers a hidden frequency in her recordings that seems to predict tragic events.",
    synopsis: "Set in a rain-drenched Seattle, sound engineer Maya stumbles upon an anomaly in her ambient recordings. As she deciphers the pattern, she realizes the sounds are echoes of future accidents. Racing against time and her own deteriorating sanity, she must interpret the noise before it claims her own life.",
    imageUrl: "https://picsum.photos/id/20/600/900",
    backdropUrl: "https://picsum.photos/id/20/1920/1080",
    awards: [{ name: "Sundance Selection", year: 2023 }, { name: "Best Sound Design - Indie Spirit", year: 2023 }]
  },
  {
    id: 'f2',
    title: "Neon Solace",
    year: 2021,
    genre: "Sci-Fi Drama",
    duration: "2h 10m",
    role: ["Director"],
    logline: "In a city that never sleeps, an android created to comfort the grieving begins to experience dreams of its own.",
    synopsis: "Unit 734 is a 'Comfort Model' android, designed to listen. When 734 begins to dream—a flaw in the programming or the birth of a soul?—it seeks out its creator in the underbelly of a neon-soaked metropolis. A quiet, meditative exploration of what it means to be alive.",
    imageUrl: "https://picsum.photos/id/119/600/900",
    backdropUrl: "https://picsum.photos/id/119/1920/1080",
    awards: [{ name: "Visual Excellence - Cannes Sidebar", year: 2021 }]
  },
  {
    id: 'f3',
    title: "The Silent Table",
    year: 2019,
    genre: "Short / Drama",
    duration: "24m",
    role: ["Director", "Editor"],
    logline: "A family dinner where no one speaks, revealing a lifetime of secrets through glances and gestures.",
    synopsis: "An experiment in non-verbal storytelling, 'The Silent Table' observes a dysfunctional family gathering. Without a single line of dialogue, the film unpacks years of resentment, love, and forgiveness through the passing of plates and the meeting of eyes.",
    imageUrl: "https://picsum.photos/id/1060/600/900",
    backdropUrl: "https://picsum.photos/id/1060/1920/1080",
    awards: [{ name: "Best Short - Vimeo Staff Pick", year: 2019 }]
  },
  {
    id: 'f4',
    title: "Rust & Bone Dust",
    year: 2024,
    genre: "Modern Western",
    duration: "Feature (In Production)",
    role: ["Director"],
    logline: "An aging rodeo star tries to save his family ranch from corporate land developers using the only skills he has left.",
    synopsis: "Currently in post-production. A gritty, raw look at the dying American West.",
    imageUrl: "https://picsum.photos/id/182/600/900",
    backdropUrl: "https://picsum.photos/id/182/1920/1080",
  }
];

export const NAV_LINKS = [
  { label: 'Selected Works', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Director\'s AI', id: 'ai' }, // Special ID for the AI section
  { label: 'Contact', id: 'contact' },
];
