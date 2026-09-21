export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  overview: string;
  problem: string;
  solution: string;
  techDeepDive: string;
  features: { title: string; description: string }[];
  lessons: string[];
};

export const projects: Project[] = [
  {
    slug: "neighbourly",
    name: "Neighbourly",
    tagline: "AI-native neighborhood analysis for Bay Area housing decisions",
    description:
      "An AI-native neighborhood analysis tool that helps people make clearer Bay Area housing decisions with interactive maps and LLM-powered insights.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Claude API",
      "Supabase",
      "Tailwind CSS",
      "Mapbox",
    ],
    highlights: [
      "Built a full-stack AI-powered application leveraging LLMs for neighborhood analysis",
      "Interactive geospatial visualization for exploring local context",
      "Real-time neighborhood data synthesis into usable recommendations",
    ],
    liveUrl: "https://neighbourly.live",
    featured: true,
    overview:
      "Neighbourly turns messy, multi-source neighborhood information into a clear decision aid. It combines geospatial exploration with AI analysis so users can compare areas with confidence instead of tabbing through disconnected tools.",
    problem:
      "Housing decisions in the Bay Area require stitching together maps, commute context, amenities, and subjective livability signals. Most tools show fragments of that picture without helping people reason across them.",
    solution:
      "I designed Neighbourly as an AI-native product: a map-first interface for exploration, backed by structured data and LLM synthesis that turns place context into actionable insights. The architecture keeps geospatial interaction responsive while using the Claude API for deeper analysis on demand.",
    techDeepDive:
      "Next.js and TypeScript provide a typed full-stack foundation. Mapbox powers interactive geospatial views. Supabase stores and serves structured neighborhood data. The Claude API handles natural-language analysis over curated context, and Tailwind keeps the UI minimal and fast to iterate.",
    features: [
      {
        title: "Map-first exploration",
        description:
          "Browse neighborhoods spatially with layers and context that support comparison.",
      },
      {
        title: "LLM-powered analysis",
        description:
          "Ask questions and get synthesized insights grounded in neighborhood data.",
      },
      {
        title: "Decision-oriented UX",
        description:
          "Surfaces tradeoffs clearly so users can move from browsing to choosing.",
      },
    ],
    lessons: [
      "AI features work best when grounded in structured data and clear product constraints.",
      "Geospatial UX needs careful performance and information hierarchy to stay usable.",
      "Full-stack ownership makes it easier to iterate on both insight quality and interaction design.",
    ],
  },
  {
    slug: "interviewiq",
    name: "InterviewIQ",
    tagline: "AI-powered interview prep and coaching",
    description:
      "An AI-powered interview prep tool for practicing responses, getting coaching feedback, and refining communication under realistic interview pressure.",
    tech: ["React", "TypeScript", "Claude API", "Supabase", "Tailwind CSS"],
    highlights: [
      "AI-native interview coaching and practice workflows",
      "Earlier product lineage that informed Neighbourly’s AI architecture",
      "Full-stack application with persistent session and feedback data",
    ],
    overview:
      "InterviewIQ helps candidates rehearse interviews with AI coaching that feels more useful than generic chat. It focuses on structured practice loops, feedback, and iteration.",
    problem:
      "Interview prep is often either too generic (flashcards and tips) or too unstructured (open-ended chat). Candidates need realistic practice with feedback they can act on.",
    solution:
      "I built InterviewIQ as an AI-native coaching loop: generate practice prompts, capture responses, and return targeted feedback. The product also became a proving ground for patterns later refined in Neighbourly.",
    techDeepDive:
      "React and TypeScript form the UI layer, with Supabase handling auth/data persistence and the Claude API driving coaching responses. Tailwind keeps the interface focused on the practice flow.",
    features: [
      {
        title: "Practice sessions",
        description:
          "Structured interview drills with prompts tailored to common frontend and product roles.",
      },
      {
        title: "AI coaching feedback",
        description:
          "Actionable critique on clarity, structure, and technical communication.",
      },
      {
        title: "Progress over time",
        description:
          "Persist sessions so candidates can review and improve across attempts.",
      },
    ],
    lessons: [
      "Tight feedback loops matter more than raw model capability.",
      "Product framing determines whether AI feels like coaching or noise.",
      "Reusable AI patterns transfer well across domains when the data model is clear.",
    ],
  },
  {
    slug: "loveapp",
    name: "LoveApp",
    tagline: "A couples app for games, media, and shared memories",
    description:
      "A Next.js + Supabase app for couples—games, media sharing, and memory-making—currently undergoing a thoughtful database schema rebuild.",
    tech: ["Next.js", "TypeScript", "React", "Supabase", "Tailwind CSS", "PostgreSQL"],
    highlights: [
      "Currently rebuilding the database schema for clearer domain modeling",
      "Full-stack relationship/social product with shared media and activities",
      "Hands-on schema design and data architecture ownership",
    ],
    overview:
      "LoveApp is a private space for couples to play, share, and remember together. Beyond the product surface, the current focus is rebuilding the data layer so features can grow without friction.",
    problem:
      "Relationship apps often accumulate features faster than their data models can support. Without a clear schema, media, games, and shared history become hard to extend reliably.",
    solution:
      "I’m rebuilding LoveApp’s Supabase/PostgreSQL schema around clearer entities and relationships, while keeping a Next.js frontend that can evolve with the new model.",
    techDeepDive:
      "Next.js App Router for the product UI, Supabase for auth and Postgres, and Tailwind for a warm, simple interface. Schema work emphasizes normalized relationships, access patterns, and future feature velocity.",
    features: [
      {
        title: "Shared activities",
        description:
          "Games and prompts designed for two people to engage together.",
      },
      {
        title: "Media sharing",
        description:
          "A private place to collect and revisit moments that matter.",
      },
      {
        title: "Schema rebuild",
        description:
          "A cleaner data foundation for memories, media, and future features.",
      },
    ],
    lessons: [
      "Schema design is product design—bad models create UI debt later.",
      "Rebuilding in place requires sequencing migrations carefully.",
      "Full-stack ownership helps keep frontend and data models aligned.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
