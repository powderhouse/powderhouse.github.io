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

let asteriskSVG = (strokeWidth = "1") => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-34 -39 150 111">
    <path
      vectorEffect="non-scaling-stroke"
      d="M 0 43.712 L 88.25 26.838 M 57.055 78.651 L 27.423 0 M 23.298 65.652 L 57.156 8.351 M 67.46 48.363 L 7.632 19.816"
      fill="transparent"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="round"
    ></path>
  </svg>
);

const BREAKPOINTS = {
  mobileMax: 550,
  tabletMax: 1100,
  laptopMax: 1440,
};

const mediaQueries = {
  uptoMobile: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
  uptoTablet: `(max-width: ${BREAKPOINTS.tabletMax}px)`,
  uptoLaptop: `(max-width: ${BREAKPOINTS.laptopMax}px)`,
};

export { navMenuItems, socials, asteriskSVG, mediaQueries };
