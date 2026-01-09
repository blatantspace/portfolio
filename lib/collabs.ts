export interface CollabLink {
  label: string;
  url: string;
}

export interface Collab {
  id: string;
  title: string;
  tagline: string;
  description: string[];
  mainImage: string;
  youtubeId?: string; // YouTube video ID for embedding
  supportImages?: string[];
  supportVideos?: string[]; // Local video files for mosaic
  links: CollabLink[];
  year: string;
  category: string;
}

export const collabs: Collab[] = [
  {
    id: "gucci-horsebit",
    title: "Gucci Horsebit Loafer",
    tagline: "Artwork for the Horsebeat Society exhibition",
    description: [
      "Commissioned piece for Gucci's celebration of the Horsebit loafer. Street art meets luxury.",
      "Shown alongside works from artists across the globe.",
    ],
    mainImage: "/collabs/gucci.jpg",
    supportImages: [],
    links: [
      { label: "View Exhibition", url: "https://gucci.com" },
    ],
    year: "2023",
    category: "Luxury Fashion",
  },
  {
    id: "homeboy-sandman",
    title: "Homeboy Sandman",
    tagline: "Music video for 'Off The Rip' (Steez Lords Remix)",
    description: [
      "AI-generated visuals for one of hip-hop's sharpest lyricists.",
      "Made with DALL-E 2, Runway, and Pika Labs.",
    ],
    mainImage: "/collabs/homeboy.png",
    youtubeId: "aXGMyOAYM6E",
    supportImages: [],
    links: [],
    year: "2023",
    category: "Music Video",
  },
  {
    id: "royel-otis",
    title: "Royel Otis",
    tagline: "Visuals for the Australian duo",
    description: [
      "Warm, sun-faded imagery for their sound.",
      "Somewhere between memory and dream.",
    ],
    mainImage: "/collabs/royel-otis.png",
    youtubeId: "NbORHQk88-s",
    supportImages: [],
    links: [],
    year: "2024",
    category: "Music Video",
  },
  {
    id: "stone-killer",
    title: "Stone Killer",
    tagline: "Music video",
    description: [
      "Visual direction.",
      "Heavy. Textured. Relentless.",
    ],
    mainImage: "/collabs/stone-killer.png",
    youtubeId: "O6DFWmr586U",
    supportImages: [],
    links: [],
    year: "2024",
    category: "Music Video",
  },
  {
    id: "harry-nathan",
    title: "Harry Nathan",
    tagline: "Cinematic visual for 'So Real'",
    description: [
      "Space visual for the Cosmic Perspective E.P.",
      "Beautiful and infinite.",
    ],
    mainImage: "/collabs/harry-nathan.png",
    youtubeId: "Xx4YXe_44Ps",
    supportImages: [],
    links: [],
    year: "2023",
    category: "Music Video",
  },
  {
    id: "beak",
    title: "BEAK>",
    tagline: "Tour 7\" single artwork",
    description: [
      "Cover art for the 'SECRETS' b/w Litronix 'STEPPING UP' split single.",
      "Merch table exclusive.",
    ],
    mainImage: "/collabs/beak.png",
    supportImages: [],
    supportVideos: [
      "/gallery/videos/beak.mp4",
      "/gallery/videos/beak_vide.mp4",
    ],
    links: [
      { label: "Listen", url: "https://bfrecs.bandcamp.com" },
    ],
    year: "2023",
    category: "Album Art",
  },
  {
    id: "torky",
    title: "Torky Vinyl Cover",
    tagline: "Artwork for 'Two Be OK'",
    description: [
      "Vinyl cover design.",
      "Soft edges. Warm tones.",
    ],
    mainImage: "/collabs/torky.png",
    supportImages: [],
    links: [],
    year: "2024",
    category: "Album Art",
  },
  {
    id: "visions-of-hell",
    title: "Visions Of Hell",
    tagline: "Music video for 'Unjust Memes'",
    description: [
      "Surreal visuals. Featured on Promonews.",
      "What alienation looks like through a broken lens.",
    ],
    mainImage: "/collabs/visions.png",
    youtubeId: "VmYBq9O5774",
    supportImages: [],
    links: [
      { label: "Promonews", url: "https://www.promonews.tv/videos/2024/11/11/visions-hell-unjust-memes-blatant-space/88950" },
    ],
    year: "2024",
    category: "Music Video",
  },
  {
    id: "26fix",
    title: "26fix",
    tagline: "Music video",
    description: [
      "Visual direction.",
      "AI that feels analog.",
    ],
    mainImage: "/collabs/26fix.png",
    supportImages: [],
    links: [],
    year: "2024",
    category: "Music Video",
  },
  {
    id: "mononeon",
    title: "MonoNeon",
    tagline: "Album cover",
    description: [
      "Artwork for the genre-defying bassist.",
      "Playful. Unexpected. Loud colors.",
    ],
    mainImage: "/collabs/mononeon.png",
    supportImages: [],
    links: [],
    year: "2024",
    category: "Album Art",
  },
];

// Helper to get collab by ID
export const getCollabById = (id: string): Collab | undefined => {
  return collabs.find((c) => c.id === id);
};

// Helper to get collabs by category
export const getCollabsByCategory = (category: string): Collab[] => {
  return collabs.filter((c) => c.category === category);
};
