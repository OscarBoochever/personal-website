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
    id: "solvang",
    title: "City of Solvang",
    description:
      "Municipal website for Solvang, California, known as 'The Danish Capital of America.' Features online utilities, permits, public records, and an AI assistant for city services.",
    tags: ["Municipal", "Custom CMS", "AI"],
    link: "https://solvang-website.vercel.app",
    image: "/portfolio/solvang.png",
    linkText: "Visit Site",
    featured: false,
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
    featured: false,
  },
  {
    id: "nola-dashboard",
    title: "NOLA Operations Dashboard",
    description:
      "Internal operations dashboard for the City of New Orleans, providing municipal staff with real-time metrics and administrative tools.",
    tags: ["Dashboard", "Operations", "Municipal"],
    link: "https://nola-dashboard.vercel.app",
    image: "/portfolio/nola.png",
    linkText: "Visit Site",
    featured: false,
  },
];
