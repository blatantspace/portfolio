import { WorkItem, Service, PressItem } from "./types";

export const workItems: WorkItem[] = [
  {
    id: "gucci-horsebeat",
    title: "Horsebeat Society Exhibition",
    client: "Gucci",
    category: "Luxury Fashion",
    year: "2023",
    description:
      "Digital artwork for Gucci's Horsebeat Society exhibition celebrating the iconic Horsebit loafer. A fusion of street art sensibilities and high fashion.",
    image: "/work/gucci.jpg",
    featured: true,
  },
  {
    id: "homeboy-sandman",
    title: "Off The Rip (Steez Lords Remix)",
    client: "Homeboy Sandman x Steez Lords",
    category: "Music Video",
    year: "2023",
    description:
      "AI-generated music video using DALL-E 2, Runway, and Pika Labs. Bringing digital-age aesthetics to hip-hop.",
    image: "/work/homeboy.jpg",
    featured: true,
  },
  {
    id: "visions-of-hell",
    title: "Unjust Memes",
    client: "Visions Of Hell",
    category: "Music Video",
    year: "2024",
    description:
      "Surreal music video exploring modern alienation through a vintage lens. Featured on Promonews.",
    image: "/work/visions.jpg",
    featured: true,
  },
  {
    id: "beak",
    title: "Tour 7\" Single Artwork",
    client: "BEAK>",
    category: "Album Art",
    year: "2023",
    description:
      "Limited edition artwork for BEAK> 'SECRETS' b/w Litronix 'STEPPING UP' split single.",
    image: "/work/beak.jpg",
    featured: false,
  },
  {
    id: "hothead",
    title: "Party Monsters Campaign",
    client: "HOTHEAD Accessories",
    category: "Brand Campaign",
    year: "2023",
    description:
      "Campaign featuring whimsical creatures adorned with hair accessories, playfully subverting TikTok micro-trends. Featured in Paper Magazine.",
    image: "/work/hothead.jpg",
    featured: true,
  },
  {
    id: "creatures",
    title: "Character Design Library",
    client: "Blatant Space",
    category: "Art Series",
    year: "2024",
    description:
      "Ongoing series of nostalgic creatures that feel like they've always existed. Tactile, warm, and slightly strange.",
    image: "/work/creatures.jpg",
    featured: false,
  },
];

export const services: Service[] = [
  {
    id: "ai-art-direction",
    title: "AI Art Direction",
    description:
      "Custom AI-generated visuals for campaigns, exhibitions, and brand identities. That nostalgic, tactile feel you can't quite place.",
    examples: ["Campaign imagery", "Exhibition artwork", "Brand characters"],
  },
  {
    id: "music-videos",
    title: "Music Videos",
    description:
      "AI-powered music videos that blend vintage aesthetics with cutting-edge technology. From hip-hop to experimental.",
    examples: ["Performance videos", "Lyric videos", "Visualizers"],
  },
  {
    id: "character-design",
    title: "Character Design",
    description:
      "Whimsical creatures and characters for brands, products, and campaigns. The kind that stick with people.",
    examples: ["Brand mascots", "Product characters", "Social content"],
  },
  {
    id: "brand-campaigns",
    title: "Brand Campaigns",
    description:
      "End-to-end creative for fashion, music, and lifestyle brands. From concept to final assets.",
    examples: ["Social campaigns", "Product launches", "Collaborations"],
  },
];

export const pressItems: PressItem[] = [
  {
    publication: "COEVAL Magazine",
    title: "Interview: AI art paradigms and the future of generative art",
    url: "https://www.coeval-magazine.com/coeval/blatant-space",
    year: "2024",
  },
  {
    publication: "Novembre Magazine",
    title: "Issue 16 Feature",
    year: "2024",
  },
  {
    publication: "Paper Magazine",
    title: "HOTHEAD Collaboration",
    year: "2023",
  },
  {
    publication: "Trois Couleurs",
    title: "Artist Interview",
    url: "https://www.troiscouleurs.fr/must-read/must-read-ia-quoi/iartiste-blatant-space-faire-un-check-au-passe-avec-une-main-experte-en-technologie/",
    year: "2024",
  },
  {
    publication: "Promonews",
    title: "Visions Of Hell - Unjust Memes",
    url: "https://www.promonews.tv/videos/2024/11/11/visions-hell-unjust-memes-blatant-space/88950",
    year: "2024",
  },
];
