// Portfolio projects configuration
// Edit this file to add, remove, or update projects

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  demo?: boolean;
  image?: string; // Static screenshot image path
}

export const projects: Project[] = [
  {
    id: "rtci",
    title: "Real-Time Crime Index",
    description:
      "A nationwide tool improving the timeliness and accessibility of crime data. Featured in CNN, NYT, Washington Post, NPR, The Atlantic, and more.",
    link: "https://realtimecrimeindex.com",
    image: "/portfolio/rtci.png",
  },
  {
    id: "fpa-lens",
    title: "Southeast Louisiana Flood Authority",
    description:
      "Public transparency dashboard with real-time insight into flood defense infrastructure, maintenance, and operations.",
    link: "https://www.fpalens.org/",
    image: "/portfolio/fpa.png",
  },
  {
    id: "jackson",
    title: "Jackson Community Care Portal",
    description:
      "Community Care Portal for Jackson County, Ohio, connecting residents in need with volunteers and local organizations.",
    link: "https://jackson-community-care-portal.vercel.app",
    image: "/portfolio/jackson.png",
  },
  {
    id: "cavalier",
    title: "Cavalier Consulting",
    description:
      "Website for a boutique Virginia government affairs and lobbying firm specializing in legislative advocacy, policy research, and bipartisan coalition building.",
    link: "https://cavalierconsultingva.com",
    image: "/portfolio/cavalier.png",
  },
  {
    id: "dfct",
    title: "Data for Community Trust",
    description:
      "Philanthropically-funded pilot site supporting honest, actionable conversations between communities and public safety agencies.",
    link: "https://dataforcommunitytrust.org/hazel-crest",
    image: "/portfolio/dct.png",
  },
  {
    id: "baldwin",
    title: "Town of Baldwin GIS Portal",
    description:
      "Interactive GIS mapping portal for the Town of Baldwin, Maine. Tax parcels, zoning, FEMA flood zones, and tools for distance, area, and abutter lookups.",
    link: "https://baldwin-gis.vercel.app",
    image: "/portfolio/baldwin.png",
    demo: true,
  },
  {
    id: "mansfield",
    title: "City of Mansfield Events Calendar",
    description:
      "Events discovery platform for Mansfield, Texas. Filterable listings with event submission for organizers.",
    link: "https://mansfield-oscarboochever-demo.vercel.app",
    image: "/portfolio/mansfield.png",
    demo: true,
  },
  {
    id: "solvang",
    title: "City of Solvang",
    description:
      "Municipal website for Solvang, California, known as 'The Danish Capital of America.' Features online utilities, permits, public records, and an AI assistant.",
    link: "https://solvang-website.vercel.app",
    image: "/portfolio/solvang.png",
    demo: true,
  },
  {
    id: "cumberland",
    title: "Cumberland County Youth Health Data Explorer",
    description:
      "Public health dashboard visualizing Maine Integrated Youth Health Survey results for Cumberland County.",
    link: "https://cumberland-miyhs.vercel.app",
    image: "/portfolio/cumberland.png",
    demo: true,
  },
  {
    id: "lmpd",
    title: "Louisville Citizen Stop Analytics",
    description:
      "Analytics platform surfacing racial disparities in Louisville Metro Police stops, with officer-level outlier detection, veil-of-darkness and hit-rate regressions, use-of-force analysis, and live-updating findings.",
    link: "https://lmpd-analytics.vercel.app/",
    image: "/portfolio/lmpd.png",
    demo: true,
  },
];
