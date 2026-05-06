// Site configuration
// Central place for all site-wide content and settings

export const siteConfig = {
  name: "Oscar Boochever",
  title: "Oscar Boochever | Government Technology & Policy Consultant",
  description:
    "Consultant and product builder helping state and local governments operate more effectively through custom software, data analysis, policy consulting, and data visualization.",
  url: "https://oscarboochever.com", // Update with actual domain
  email: "oscarboochever@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/oscar-boochever-531010ba/",
    github: "https://github.com/oscarboochever",
  },
};

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Selected Work", href: "#selected-work" },
  { name: "Contact", href: "#contact" },
];

export const heroContent = {
  name: "Oscar Boochever",
  tagline: "Building products and leveraging data for state & local government",
  ctaPrimary: {
    text: "Get in Touch",
    href: "#contact",
  },
  ctaSecondary: {
    text: "See My Work",
    href: "#selected-work",
  },
};

export const aboutContent = {
  heading: "About Me",
  headshot: "/headshot.jpg",
  resumeLink: "/Oscar%20Boochever%20Resume.pdf",
  bio: [
    "I help state and local governments provide better public services. As a consultant and product developer, I combine technical skills with policy expertise to solve real problems, whether that means building custom software, analyzing complex data, or advising on strategic initiatives.",
    "I'm passionate about tackling major social issues, with particular expertise in the realm of criminal justice policy. I believe in safely reducing mass incarceration and racial inequities in the criminal legal system, taking a holistic lens from policing through reentry. Beyond the criminal legal system, I'm excited about implementation: turning policy ideas into reality to more effectively deliver government services.",
    "When I'm not working, you might find me at a bluegrass jam playing guitar or banjo.",
  ],
};

export const contactContent = {
  heading: "Contact",
  description: "Interested in working together? Fill out the form below or email me at ",
  formAction: "https://formspree.io/f/mzdapkvq",
};

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} Oscar Boochever`,
};
