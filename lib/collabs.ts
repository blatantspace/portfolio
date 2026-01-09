export interface CollabLink {
  label: string;
  url: string;
}

export interface Collab {
  id: string;
  title: string;
  tagline: string; // 1 line description
  description: string[]; // 2 paragraphs
  mainImage: string;
  supportImages?: string[]; // optional grid of supporting images
  links: CollabLink[];
  year: string;
  category: string;
}

export const collabs: Collab[] = [
  {
    id: "gucci-horsebit",
    title: "Gucci Horsebit Loafer",
    tagline: "Digital artwork for Gucci's Horsebeat Society exhibition",
    description: [
      "Contributed artwork to Gucci's 'Horsebeat Society' exhibition celebrating the iconic Horsebit loafer. A modern fusion of street art sensibilities and high fashion, bringing digital-age aesthetics to luxury branding.",
      "Featured vibrant imagery, expressive typography, and a unique blend of contemporary art with Gucci's universe. The work bridges nostalgia and cutting-edge technology.",
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
    tagline: "AI-generated music video for 'Off The Rip' (Steez Lords Remix)",
    description: [
      "Created an AI-generated music video using DALL-E 2, Runway, and Pika Labs. A collaboration that brought digital-age aesthetics to hip-hop, working with one of the most talented artists in the game.",
      "The video embraces the tactile warmth of vintage aesthetics while pushing the boundaries of what's possible with generative AI in music visuals.",
    ],
    mainImage: "/collabs/homeboy.jpg",
    supportImages: [],
    links: [
      { label: "Watch Video", url: "https://www.youtube.com/watch?v=aXGMyOAYM6E" },
    ],
    year: "2023",
    category: "Music Video",
  },
  {
    id: "royel-otis",
    title: "Royel Otis",
    tagline: "Visual direction for emerging Australian duo",
    description: [
      "Visual collaboration with Royel Otis, bringing nostalgic AI-generated aesthetics to their unique sound. The project captures the warmth and texture that defines the Blatant Space approach.",
      "Created imagery that feels like memories from decades past, achieved through cutting-edge technology.",
    ],
    mainImage: "/collabs/royel-otis.jpg",
    supportImages: [],
    links: [],
    year: "2024",
    category: "Music Video",
  },
  {
    id: "beak",
    title: "BEAK>",
    tagline: "Artwork for limited edition Tour 7\" single",
    description: [
      "Designed artwork for the BEAK> 'SECRETS' b/w Litronix 'STEPPING UP' split single, available exclusively at tour merch tables. A limited edition release for the band's tour.",
      "The design captures the experimental, analog spirit of BEAK> while bringing a fresh digital perspective.",
    ],
    mainImage: "/collabs/beak.jpg",
    supportImages: [],
    links: [
      { label: "Listen", url: "https://bfrecs.bandcamp.com" },
    ],
    year: "2023",
    category: "Album Art",
  },
  {
    id: "torky",
    title: "Torky Vinyl Cover",
    tagline: "Album artwork for 'Two Be OK'",
    description: [
      "Created vinyl cover artwork for Torky's 'Two Be OK' release. The design embodies that specific warmth of handmade things from decades past.",
      "Digital art that feels soft, touchable, human—bridging the gap between nostalgia and modern AI capabilities.",
    ],
    mainImage: "/collabs/torky.jpg",
    supportImages: [],
    links: [],
    year: "2024",
    category: "Album Art",
  },
  {
    id: "visions-of-hell",
    title: "Visions Of Hell",
    tagline: "Surreal music video exploring modern alienation",
    description: [
      "Created a surreal music video for the track 'Unjust Memes,' exploring themes of modern alienation through a vintage lens. Featured on Promonews.",
      "The work highlights the tension between our digital present and analog past, using AI to create imagery that feels both familiar and impossible.",
    ],
    mainImage: "/collabs/visions.jpg",
    supportImages: [],
    links: [
      { label: "Watch Video", url: "https://www.youtube.com/watch?v=VmYBq9O5774" },
      { label: "View on Promonews", url: "https://www.promonews.tv/videos/2024/11/11/visions-hell-unjust-memes-blatant-space/88950" },
    ],
    year: "2024",
    category: "Music Video",
  },
  {
    id: "26fix",
    title: "26fix",
    tagline: "Music video visual direction",
    description: [
      "Visual collaboration bringing the Blatant Space aesthetic to 26fix's unique sound. AI-generated imagery that feels handmade.",
      "The project showcases how cutting-edge technology can evoke nostalgia and warmth.",
    ],
    mainImage: "/collabs/26fix.jpg",
    supportImages: [],
    links: [],
    year: "2024",
    category: "Music Video",
  },
  {
    id: "mononeon",
    title: "MonoNeon",
    tagline: "Album cover for genre-defying bassist",
    description: [
      "Created album artwork for MonoNeon, the genre-defying bassist known for his viral covers and experimental approach to funk.",
      "The cover captures the playful, unexpected energy of MonoNeon's music through whimsical character design and bold color choices.",
    ],
    mainImage: "/collabs/mononeon.jpg",
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
