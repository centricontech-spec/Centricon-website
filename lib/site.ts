// All business content in one place. Edit copy here, not in the page files.

export const site = {
  name: "Centricon",
  tagline: "AI film and video studio",
  description:
    "AI video, motion and visual production for brands — plus the AI systems behind them.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Pakistan · working with clients worldwide",
  year: 2026,
};

export const contact = {
  email: "centricon.tech@gmail.com",
  phoneDisplay: "+92 343 3021725",
  phoneHref: "tel:+923433021725",
  whatsappHref: "https://wa.me/923433021725",
  linkedin: "https://www.linkedin.com/company/centricon-tech/",
  response: "We reply within 24 hours on weekdays.",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  name: string;
  line: string;
  detail: string;
  includes: string[];
};

export const videoServices: Service[] = [
  {
    slug: "brand-films",
    name: "Brand films",
    line: "Story-led films for launches, campaigns and brand moments.",
    detail:
      "A film that says who you are, made from a script up. We write it, storyboard every shot, generate and direct the footage, then edit, grade and score it into a finished piece.",
    includes: ["Script and storyboard", "Generated footage, edited and colour-graded", "Music and sound design", "Cuts in 16:9, 9:16 and 1:1"],
  },
  {
    slug: "product-ads",
    name: "Product ads",
    line: "Your product in scenes no shoot could afford.",
    detail:
      "Put your product on a mountain top, under water or in a world that doesn't exist — without a set, a crew or a location fee. Built for paid social, YouTube and TV.",
    includes: ["Concepts and storyboards", "Product-accurate hero shots", "Short and long cuts for each platform", "Versions for A/B testing"],
  },
  {
    slug: "social-content",
    name: "Social content",
    line: "Vertical-first series for Reels, TikTok and Shorts.",
    detail:
      "A steady stream of short videos made for how people actually scroll: vertical, fast to the point, and consistent with your brand from one post to the next.",
    includes: ["Monthly content series", "9:16 first, with 1:1 and 4:5 versions", "Captions and on-screen text", "Hooks written for each platform"],
  },
  {
    slug: "ai-avatars",
    name: "AI avatars",
    line: "Presenters and spokespeople who speak any language.",
    detail:
      "A consistent on-screen presenter for explainers, training, product walkthroughs and announcements — updated in minutes when the script changes.",
    includes: ["Custom presenter look", "Lip-synced speech in multiple languages", "Explainer and training videos", "Script writing"],
  },
  {
    slug: "music-visuals",
    name: "Music visuals",
    line: "Visualisers, lyric videos and full music videos.",
    detail:
      "Visual worlds for a track: loops for streaming platforms, lyric videos and complete music videos, cut to the beat.",
    includes: ["Spotify Canvas and visualiser loops", "Lyric videos", "Full music videos", "Release teasers for social"],
  },
  {
    slug: "localisation",
    name: "Localisation",
    line: "Dub and lip-sync your existing videos into new markets.",
    detail:
      "Take a video that already works and make it speak to a new audience: translated, voiced and lip-synced so it feels made for that market.",
    includes: ["Translation and voice", "Lip-sync to the new language", "Subtitles", "Versions per market"],
  },
];

export const creativeServices = [
  { name: "AI product photography", line: "Catalogue, campaign and lifestyle stills without a studio day." },
  { name: "Motion graphics", line: "Titles, logo animations, explainers and animated ads." },
  { name: "Brand identity", line: "Logos, visual systems and brand guidelines." },
];

export const engineeringServices = [
  { name: "AI agents and automation", line: "Assistants and workflows that take repetitive work off your team." },
  { name: "Web and mobile apps", line: "Fast, well-built products for web, iOS and Android." },
  { name: "Custom software", line: "Internal tools and platforms built around how you work." },
  { name: "Cloud and DevOps", line: "Infrastructure, deployment pipelines and monitoring that stay up." },
  { name: "Data and analytics", line: "Pipelines, dashboards and reporting you can act on." },
];

export const audiences = [
  { name: "Brands and marketing teams", line: "Launch films, campaign assets and always-on social content." },
  { name: "Agencies", line: "A production partner for AI-heavy briefs and fast turnarounds." },
  { name: "E-commerce and product companies", line: "Product ads and catalogue visuals without a studio day." },
  { name: "Artists and labels", line: "Music videos, visualisers and release content." },
];

export const steps = [
  { name: "Brief", line: "A call and a one-page brief: audience, platform, tone, deadline." },
  { name: "Script and storyboard", line: "We write it and frame every shot as a still before any video is made." },
  { name: "Generate", line: "Shots are generated, picked and redone until every frame holds up." },
  { name: "Edit, sound and grade", line: "Cut, colour-graded and scored by editors — not just exported." },
  { name: "Deliver", line: "Masters plus every cut and ratio you need: 16:9, 9:16, 1:1." },
];

export const principles = [
  { name: "The work is the pitch", line: "We'd rather show you a frame than describe a capability." },
  { name: "AI is the tool, craft is the job", line: "Generation is one step. Writing, directing, editing and grading are what make it a film." },
  { name: "Straight about limits", line: "We tell you early what AI does well, what it doesn't, and what that means for your brief." },
  { name: "One team, end to end", line: "The people who write your script are the people who deliver the final cut." },
];
