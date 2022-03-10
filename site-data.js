let navMenuItems = [
  { text: "About", href: "/about", color: "--red" },
  { text: "Team", href: "/team", color: "--purple" },
  { text: "Work", href: "/work", color: "--green" },
  { text: "News", href: "/news", color: "--yellow" },
];

let socials = [
  {
    service: "Twitter",
    href: "https://twitter.com/powderhs",
  },
  {
    service: "Facebook",
    href: "https://www.facebook.com/powderhousestudios",
  },
  {
    service: "Instagram",
    href: "https://www.instagram.com/powderhs/",
  },
  {
    service: "YouTube",
    href: "https://www.youtube.com/channel/UCtTU6mxTNn0GxbxnzT3zrEQ",
  },
];
socials.forEach((s) => (s.id = s.service.toLowerCase() + "-" + "social"));

const breakpoints = {
  mobileMin: 375,
  mobileMax: 550,
  tabletMax: 1100,
  laptopMax: 1440,
  desktopMin: 1440 + 1,
};

const validationPaths = [
  // TODO: Hardcoded for now, but should talk to CMS or similar
  "/",
  "/about",
  "/team",
  "/team/jobs",
  "/team/jobs/financial-researcher",
  "/team/jobs/legal-researcher",
  "/work",
  "/work/prospect-studio",
  "/work/innovation-school",
  "/work/equitable-enrollment",
  "/work/creative-computing",
  "/work/atlas",
  "/work/digital-storytelling",
  "/work/turtle-geometry",
  "/work/dlcs-standards",
  "/work/fabville",
  "/work/healey-steam",
  "/work/spaghetti-dinners",
  "/work/signs-of-life",
  "/work/flutes-and-waves",
  "/work/bring-your-grandma-to-math",
  "/work/nervous-nature",
  "/work/streetbeest",
  "/news",
];

const mediaQueries = {
  uptoMobile: `(max-width: ${breakpoints.mobileMax}px)`,
  uptoTablet: `(max-width: ${breakpoints.tabletMax}px)`,
  uptoLaptop: `(max-width: ${breakpoints.laptopMax}px)`,
};

export { navMenuItems, socials, mediaQueries, breakpoints, validationPaths };
