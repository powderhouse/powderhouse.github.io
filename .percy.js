const breakpoints = {
  // Pasted from `site-data.js` because Percy does not seem to support require/import
  mobileMin: 375,
  mobileMax: 550,
  tabletMax: 1100,
  laptopMax: 1440,
  desktopMin: 1440 + 1,
};

let breakpointWidths = Object.values(breakpoints);

let minsToTest = breakpointWidths.map((b) => b - 1);
let maxsToTest = breakpointWidths.map((b) => b + 1);

let widthsToTest = [...minsToTest.slice(1), ...maxsToTest.slice(0, -1)].sort(
  (a, b) => a - b
);

module.exports = {
  version: 2,
  snapshot: {
    widths: widthsToTest,
    minHeight: 1024,
    percyCSS: "",
  },
  discovery: {
    networkIdleTimeout: 100,
  },
  static: {
    cleanUrls: false,
  },
  upload: {
    files: "**/*.{png,jpg,jpeg}",
    ignore: "",
    stripExtensions: false,
  },
};
