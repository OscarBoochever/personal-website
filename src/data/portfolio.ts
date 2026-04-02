// Portfolio projects configuration
// Edit this file to add, remove, or update projects

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkText?: string;
  featured?: boolean;
  demo?: boolean;
  image?: string; // Static screenshot image path
}

export const projects: Project[] = [
  {
    id: "rtci",
    title: "Real-Time Crime Index",
    description:
      "A nationwide tool improving the timeliness and accessibility of crime data. Featured in CNN, NYT, Washington Post, NPR, The Atlantic, and more.",
    tags: ["National Impact", "Data Visualization", "Public Data"],
    link: "https://realtimecrimeindex.com",
    image: "/portfolio/rtci.png",
    linkText: "Visit Site",
    featured: true,
  },
  {
    id: "dfct",
    title: "Data for Community Trust",
    description:
      "Philanthropically-funded pilot site supporting honest, actionable conversations between communities and public safety agencies.",
    tags: ["Community Engagement", "Data Transparency", "Public Safety"],
    link: "https://dataforcommunitytrust.org/hazel-crest",
    image: "/portfolio/dct.png",
    linkText: "Visit Site",
    featured: true,
  },
  {
    id: "fpa-lens",
    title: "Southeast Louisiana Flood Authority",
    description:
      "Public transparency dashboard for the Southeast Louisiana Flood Protection Authority. Real-time insight into flood defense infrastructure, maintenance, and operations.",
    tags: ["Dashboard", "Transparency", "Infrastructure"],
    link: "https://fpa-lens.vercel.app",
    image: "/portfolio/fpa.png",
    linkText: "Visit Site",
  },
  {
    id: "jackson",
    title: "Jackson County Community Care Portal",
    description:
      "Digital platform connecting Jackson County residents who need assistance with volunteers and local organizations. Residents submit requests, facilitators match them with resources, and community members respond with support.",
    tags: ["Community", "Social Services", "Municipal"],
    link: "https://jackson-community-care-portal.vercel.app",
    image: "/portfolio/jackson.png",
    linkText: "Visit Site",
  },
  {
    id: "cavalier",
    title: "Cavalier Consulting",
    description:
      "Website for a boutique Virginia government affairs and lobbying firm specializing in legislative advocacy, policy research, and bipartisan coalition building.",
    tags: ["Government Affairs", "Policy", "Virginia"],
    link: "https://cavalierconsultingva.com",
    image: "/portfolio/cavalier.png",
    linkText: "Visit Site",
  },
  {
    id: "essayright",
    title: "EssayRight",
    description:
      "Essay coaching and writing mentorship platform helping students from middle school through PhD programs develop authentic writing voice.",
    tags: ["Education", "Writing", "Coaching"],
    link: "https://essayright.org",
    image: "/portfolio/essayright.png",
    linkText: "Visit Site",
  },
  {
    id: "mansfield",
    title: "City of Mansfield Events Calendar",
    description:
      "Events discovery platform for Mansfield, Texas. Filterable listings by category, age group, and location with multiple viewing options and event submission for organizers.",
    tags: ["Events", "Municipal", "Community"],
    link: "https://mansfield-oscarboochever-demo.vercel.app",
    image: "/portfolio/mansfield.png",
    linkText: "View Demo",
    demo: true,
  },
  {
    id: "solvang",
    title: "City of Solvang",
    description:
      "Municipal website for Solvang, California, known as 'The Danish Capital of America.' Features online utilities, permits, public records, and an AI assistant for city services.",
    tags: ["Municipal", "Custom CMS", "AI"],
    link: "https://solvang-website.vercel.app",
    image: "/portfolio/solvang.png",
    linkText: "View Demo",
    demo: true,
  },
  {
    id: "nola-dashboard",
    title: "NOLA Operations Dashboard",
    description:
      "Internal operations dashboard for the City of New Orleans, providing municipal staff with real-time metrics and administrative tools.",
    tags: ["Dashboard", "Operations", "Municipal"],
    link: "https://nola-dashboard.vercel.app",
    image: "/portfolio/nola.png",
    linkText: "View Demo",
    demo: true,
  },
  {
    id: "howell",
    title: "Howell County",
    description:
      "Official government website for Howell County, Missouri. Centralized hub for county services, property taxes, election information, and office directories.",
    tags: ["County Government", "Public Services", "Municipal"],
    link: "https://howell-county-gov.vercel.app",
    image: "/portfolio/howell.png",
    linkText: "View Demo",
    demo: true,
  },
  {
    id: "proright",
    title: "ProRight",
    description:
      "Strategic writing mentorship for executives, consultants, and government professionals. Helps professionals develop authentic voice that stands apart from AI-generated content.",
    tags: ["Professional Development", "Writing", "Executive"],
    link: "https://proright.org",
    image: "/portfolio/proright.png",
    linkText: "Visit Site",
  },
];
