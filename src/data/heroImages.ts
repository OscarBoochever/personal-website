// Hero carousel images configuration
// Add your images to the public folder and update this list
// Each image can have an optional caption (e.g., city name)

export interface HeroImage {
  src: string;
  alt: string;
  caption?: string;
  overlayOpacity?: number; // 0-100, defaults to 65
  mobilePosition?: string; // object-position for mobile, defaults to "center"
}

export const heroImages: HeroImage[] = [
  {
    src: "/daytime-nyc.jpg",
    alt: "New York City skyline",
    caption: "New York, NY",
    mobilePosition: "center",
  },
  {
    src: "/cambridge.webp",
    alt: "Cambridge",
    caption: "Cambridge, MA",
    mobilePosition: "15% center",
  },
  {
    src: "/Nashville-Skyline.jpg.webp",
    alt: "Nashville skyline",
    caption: "Nashville, TN",
    mobilePosition: "35% center",
  },
  {
    src: "/ithaca-gorge.webp",
    alt: "Ithaca Gorge",
    caption: "Ithaca, NY",
    overlayOpacity: 50,
    mobilePosition: "center",
  },
  {
    src: "/dc.jpeg",
    alt: "Washington DC",
    caption: "Washington, DC",
    mobilePosition: "35% center",
  },
  {
    src: "/london.jpg",
    alt: "London",
    caption: "London, UK",
    mobilePosition: "20% center",
  },
];

// Placeholder colors for development (used when images aren't available)
export const placeholderColors = [
  "#5C6B4F", // olive green
  "#8B7355", // warm brown
  "#6B7B5F", // sage
  "#7B6B55", // taupe
];
