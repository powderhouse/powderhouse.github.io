let navMenuItems = [
  { text: "About", href: "/about", color: "yellow", scribbleNum: "1" },
  { text: "Team", href: "/team", color: "purple", scribbleNum: "2" },
  { text: "Work", href: "/work", color: "green", scribbleNum: "3" },
  { text: "News", href: "/news", color: "yellow", scribbleNum: "1" },
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

let buttonSVGs = {
  long: {
    thick: {
      shortText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 336 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 67 L 2 2 L 309.472 2 L 334.354 34.286 L 309.472 67 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            d="M 90 2 L 95 67 L 122 2 L 129.5 67 L 145.022 2 L 224.736 66 L 199.167 2 L 253.814 66 L 253.814 2 L 284.898 66 L 275.372 2 L 307.96 66 L 314.978 11"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      medText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          width="336"
          height="69"
          viewBox="0 0 336 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 67 L 2 2 L 309.472 2 L 334.354 34.286 L 309.472 67 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            d="M 122 2 L 149.5 67 L 168 2 L 194.5 67 L 199 2 L 249 67 L 261 2 L 282.5 64.5 L 285 2 L 319 54.5"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      longText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          width="336"
          height="69"
          viewBox="0 0 336 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 67 L 2 2 L 309.472 2 L 334.354 34.286 L 309.472 67 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            d="M 168 67 L 188.5 2 L 217.5 67 L 234.5 2 L 269.5 67 L 261 2 L 307.96 66 L 321.5 17.5"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
    },
    thin: {
      shortText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 339 49"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 47.5 L 2 1.5 L 312.472 1.63 L 337.354 24.349 L 312.472 47.37 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
          ></path>
          <path
            d="M 218.739 47 L 234.165 2 L 248.596 46.308 L 255.065 2 L 287.908 46.308 L 268.004 2 L 298.856 46.308 L 289.401 2 L 311.754 46.308 L 318.739 8.231"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
          <path
            d="M 9 47 L 24.5 2 L 41.5 47 L 50 1.5 L 62.5 47.5 L 70 1.5 L 93.5 47 L 93.5 1.5 L 118.5 47.5 L 129.5 2"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      medText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 339 49"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 47.5 L 2 1.5 L 311.472 1.63 L 336.354 24.349 L 311.472 47.37 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
          ></path>
          <path
            d="M 218.5 1.5 L 237 47.5 L 240 2 L 256.5 47 L 271 2 L 271 47 L 283 2 L 304.5 45.962 L 311 2 L 321 38.346"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
          <path
            d="M 4.5 1.5 L 17 47.5 L 39.5 1.5 L 52.5 47.5 L 69 1.5 L 79.5 47 L 83 1.5 L 97 46 L 100.5 1.5 L 119 47.5"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      longText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 339 49"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 47.5 L 2 1.5 L 312.472 1.63 L 337.354 24.349 L 312.472 47.37 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
          ></path>
          <path
            d="M 241 47 L 249.5 1.5 L 267.5 47 L 269.5 1.5 L 289.5 47.1 L 294.5 1.6 L 310.5 47.1 L 303 1.6 L 320 38.7 L 327.5 16.65"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M 2 47 L 13.5 1.5 L 28.5 47 L 50.5 1.5 L 53.5 47 L 61.5 1.5 L 74.5 47 L 70 1.5 L 94.5 47 L 95.5 1.5"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
  },
  medium: {
    thick: {
      shortText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 266 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 67 L 2 2 L 239.472 2 L 264.354 34.286 L 239.472 67 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            d="M 86 2 L 91 67 L 108 2 L 115.5 67 L 131 2 L 175.5 66 L 152 2 L 195 66 L 184.814 2 L 215.898 66 L 206.372 2 L 238.96 66 L 245.978 11"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      medText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 266 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 67 L 2 2 L 239.472 2 L 264.354 34.286 L 239.472 67 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            d="M 110 2 L 149.5 67 L 138 2 L 174.5 67 L 199 2 L 199 67 L 211 2 L 232.5 65.5 L 239 2 L 249 54.5"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      longText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 266 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 67 L 2 2 L 239.472 2 L 264.354 34.286 L 239.472 67 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            d="M 168 67 L 168.5 2 L 187.5 67 L 194.5 2 L 219.5 67 L 211 2 L 237.96 66 L 251.5 17.5"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
    },
  },
  short: {
    thick: {
      shortText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 206 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 67 L 2 2 L 179.472 2 L 204.354 34.286 L 179.472 67 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            d="M 85.5 67 L 101 2 L 115.5 66 L 122 2 L 155 66 L 135 2 L 166 66 L 156.5 2 L 178.96 66 L 185.978 11"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      medText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 206 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 67 L 2 2 L 179.472 2 L 204.354 34.286 L 179.472 67 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            d="M 124 67 L 127.5 2 L 132.5 67 L 151.5 2 L 157.5 67 L 160 2 L 187 55 L 194.5 23.5"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      longText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 206 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 67 L 2 2 L 179.472 2 L 204.354 34.286 L 179.472 67 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            d="M 156.5 67 L 161.5 2 L 177.5 67 L 170 2 L 187 55 L 194.5 23.5"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
    },
    thin: {
      shortText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 206 49"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 47.37 L 2 1.63 L 179.472 1.63 L 204.354 24.349 L 179.472 47.37 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
          ></path>
          <path
            d="M 85.739 47 L 101.165 2 L 115.596 46.308 L 122.065 2 L 154.908 46.308 L 135.004 2 L 165.856 46.308 L 156.401 2 L 178.754 46.308 L 185.739 8.231"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      medText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 206 49"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 47.37 L 2 1.63 L 179.472 1.63 L 204.354 24.349 L 179.472 47.37 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
          ></path>
          <path
            d="M 100 2 L 109.5 47 L 108 2 L 124.5 47 L 139 2 L 139 47 L 151 2 L 172.5 45.962 L 179 2 L 189 38.346"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      longText: (color = "off-black", height = "100%", width = "100%") => (
        <svg
          className={"arrowSVG " + color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 206 49"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            d="M 2 47.37 L 2 1.63 L 179.472 1.63 L 204.354 24.349 L 179.472 47.37 Z"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
          ></path>
          <path
            d="M 156.5 47.1 L 161.5 1.6 L 177.5 47.1 L 170 1.6 L 187 38.7 L 194.5 16.65"
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
  },
};

let asteriskSVG = (color = "off-black", strokeWidth="5") => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-34 -39 150 111">
    <path
      d="M 0 43.712 L 88.25 26.838 M 57.055 78.651 L 27.423 0 M 23.298 65.652 L 57.156 8.351 M 67.46 48.363 L 7.632 19.816"
      fill="transparent"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="round"
    ></path>
  </svg>
);

let scribbleSVGs = {
  1: (color = "off-black") => (
    <svg
      className={"scribbleSVG " + color}
      xmlns="http://www.w3.org/2000/svg"
      width="47.5"
      height="7.5"
    >
      <path
        d="M 0 7.5 L 3 1.5 L 4.5 7.5 L 9.5 1.5 L 13 7.5 L 16.5 3 L 18.5 7.5 L 25 3 L 30 7.5 L 34 1.5 L 35 7.5 L 38.5 0 L 40 7.5 L 42 2 L 44.5 6.5 L 47.5 0"
        fill="transparent"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  2: (color = "off-black") => (
    <svg
      className={"scribbleSVG " + color}
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="10"
    >
      <path
        d="M 1.5 2.5 L 4 7.5 L 6 1.5 L 7.5 8 L 11 1.5 L 13.5 8 L 16 2.5 L 18.5 9 L 22 1.5 L 25 7.5 L 27 2.5 L 34 7.5 L 37 2.5 L 39.5 6"
        fill="transparent"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  3: (color = "off-black") => (
    <svg
      className={"scribbleSVG " + color}
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="11"
    >
      <path
        d="M 1 10 L 5 1.5 L 6.5 10 L 8 3.5 L 12 10 L 18 5 L 25 10 L 29 6 L 31 10 L 32.5 3.5 L 35 10 L 38 3.5 L 40 9"
        fill="transparent"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
};

let logotypeHorizSVG = (color = "off-black") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 458 47"
    preserveAspectRatio="xMinYMin meet"
    stroke="transparent"
  >
    <g>
      <path d="M 96.133 46.29 L 0.043 46.29 L 0.043 22.29 L 36.873 0 L 96.133 24.51 Z M 3.043 43.29 L 93.133 43.29 L 93.133 26.51 L 37.133 3.32 L 3.043 23.94 Z"></path>
      <path d="M 1.543 46.29 C 1.178 46.303 0.821 46.178 0.543 45.94 C -0.094 45.412 -0.183 44.468 0.343 43.83 L 35.903 0.97 C 36.433 0.332 37.38 0.245 38.018 0.775 C 38.656 1.305 38.743 2.252 38.213 2.89 L 2.693 45.75 C 2.409 46.091 1.988 46.289 1.543 46.29 Z"></path>
      <path d="M 37.323 46.11 C 37.051 46.11 36.784 46.034 36.553 45.89 L 1.043 24.51 C 0.554 24.25 0.248 23.741 0.247 23.187 C 0.247 22.633 0.552 22.123 1.041 21.862 C 1.53 21.601 2.123 21.631 2.583 21.94 L 37.093 42.72 L 66.153 13.56 C 66.44 13.268 66.834 13.109 67.243 13.12 C 67.655 13.128 68.046 13.305 68.323 13.61 L 95.323 43.27 C 95.739 43.656 95.902 44.245 95.743 44.79 C 95.583 45.335 95.13 45.744 94.571 45.845 C 94.012 45.947 93.444 45.724 93.103 45.27 L 67.203 16.77 L 38.393 45.67 C 38.109 45.953 37.724 46.111 37.323 46.11 Z"></path>
      <path d="M 54.783 45.88 C 54.599 45.881 54.415 45.847 54.243 45.78 C 53.859 45.638 53.554 45.34 53.403 44.96 L 35.793 2.51 C 35.554 2.009 35.611 1.416 35.942 0.97 C 36.273 0.523 36.824 0.297 37.373 0.381 C 37.923 0.464 38.38 0.845 38.563 1.37 L 55.563 42.37 L 93.563 24.45 C 94.314 24.099 95.207 24.424 95.558 25.175 C 95.909 25.926 95.584 26.819 94.833 27.17 L 55.423 45.74 C 55.224 45.836 55.005 45.884 54.783 45.88 Z M 111.043 2.2 L 128.743 2.2 C 137.883 2.2 142.983 6.93 142.983 14.67 C 142.983 22.41 137.883 27.27 128.743 27.27 L 115.743 27.27 L 115.743 46.27 L 111.043 46.27 Z M 128.613 22.86 C 134.733 22.86 138.133 19.86 138.133 14.67 C 138.133 9.48 134.733 6.61 128.613 6.61 L 115.763 6.61 L 115.763 22.86 Z M 143.173 31.37 C 143.173 21.98 149.343 15.62 158.293 15.62 C 167.243 15.62 173.473 21.98 173.473 31.37 C 173.473 40.76 167.303 47.12 158.293 47.12 C 149.283 47.12 143.173 40.76 143.173 31.37 Z M 158.293 42.96 C 164.593 42.96 168.753 38.3 168.753 31.37 C 168.753 24.44 164.593 19.78 158.293 19.78 C 151.993 19.78 147.893 24.44 147.893 31.37 C 147.893 38.3 152.043 42.96 158.293 42.96 Z M 174.353 16.44 L 179.143 16.44 L 186.703 41.14 L 194.263 16.44 L 199.493 16.44 L 207.043 41.2 L 214.543 16.44 L 219.333 16.44 L 209.813 46.3 L 204.463 46.3 L 196.903 21.73 L 189.273 46.3 L 183.923 46.3 Z M 220.283 31.37 C 220.283 21.98 226.073 15.62 234.583 15.62 C 239.493 15.62 243.213 17.62 245.163 20.97 L 245.163 2.2 L 249.703 2.2 L 249.703 46.3 L 245.603 46.3 L 245.603 41.2 C 243.653 44.98 239.813 47.12 234.603 47.12 C 226.043 47.12 220.283 40.76 220.283 31.37 Z M 235.213 42.96 C 241.323 42.96 245.293 38.3 245.293 31.37 C 245.293 24.44 241.293 19.78 235.213 19.78 C 229.133 19.78 225.043 24.44 225.043 31.37 C 225.043 38.3 229.103 42.96 235.213 42.96 Z M 254.233 31.24 C 254.233 21.54 260.093 15.62 268.543 15.62 C 276.993 15.62 282.463 21.29 282.463 30.17 C 282.471 31.055 282.428 31.94 282.333 32.82 L 258.833 32.82 C 259.153 39.18 262.933 43.21 268.913 43.21 C 272.526 43.393 275.87 41.306 277.293 37.98 L 281.893 37.98 C 280.143 43.629 274.801 47.385 268.893 47.12 C 260.163 47.12 254.233 40.95 254.233 31.24 Z M 277.863 28.97 L 277.863 28.51 C 277.863 23.22 274.273 19.51 268.413 19.51 C 262.743 19.51 259.023 23.51 258.833 28.95 Z M 286.873 16.44 L 290.963 16.44 L 290.963 21.16 C 291.593 18.236 294.28 16.223 297.263 16.44 L 303.183 16.44 L 303.183 20.44 L 296.883 20.44 C 292.983 20.44 291.403 22.83 291.403 27.24 L 291.403 46.24 L 286.873 46.24 Z M 307.043 2.2 L 311.573 2.2 L 311.573 20.2 C 313.573 17.05 317.053 15.6 321.153 15.6 C 328.523 15.6 333.153 19.95 333.153 28.39 L 333.153 46.3 L 328.613 46.3 L 328.613 28.72 C 328.613 22.55 325.463 19.78 320.423 19.78 C 315.193 19.78 311.603 23.49 311.603 28.91 L 311.603 46.3 L 307.043 46.3 Z M 337.043 31.37 C 337.043 21.98 343.223 15.62 352.163 15.62 C 361.103 15.62 367.353 21.98 367.353 31.37 C 367.353 40.76 361.173 47.12 352.163 47.12 C 343.153 47.12 337.043 40.76 337.043 31.37 Z M 352.163 42.96 C 358.463 42.96 362.623 38.3 362.623 31.37 C 362.623 24.44 358.463 19.78 352.163 19.78 C 345.863 19.78 341.743 24.44 341.743 31.37 C 341.743 38.3 345.903 42.96 352.133 42.96 Z M 371.223 34.33 L 371.223 16.44 L 375.763 16.44 L 375.763 34.01 C 375.763 40.19 378.763 43.01 383.703 43.01 C 388.803 43.01 392.333 39.29 392.333 33.88 L 392.333 16.44 L 396.863 16.44 L 396.863 46.3 L 392.773 46.3 L 392.773 42.14 C 390.773 45.55 387.163 47.14 382.943 47.14 C 375.703 47.12 371.223 42.77 371.223 34.33 Z M 415.953 42.27 C 419.863 42.27 422.133 40.44 422.133 37.42 C 422.133 34.9 420.553 32.76 417.133 32.76 L 411.273 32.76 C 405.343 32.76 402.073 29.23 402.073 24.76 C 402.073 19.85 405.663 16.45 411.963 16.45 L 424.963 16.45 L 424.963 20.45 L 411.963 20.45 C 408.433 20.45 406.793 22.15 406.793 24.73 C 406.793 26.88 408.243 28.83 411.793 28.83 L 417.653 28.83 C 423.883 28.83 426.843 32.36 426.843 37.4 C 426.843 42.94 422.843 46.28 416.013 46.28 L 403.043 46.28 L 403.043 42.28 Z M 429.683 31.24 C 429.683 21.54 435.543 15.62 443.993 15.62 C 452.443 15.62 457.913 21.29 457.913 30.17 C 457.921 31.055 457.878 31.94 457.783 32.82 L 434.283 32.82 C 434.603 39.18 438.383 43.21 444.363 43.21 C 447.976 43.393 451.32 41.306 452.743 37.98 L 457.343 37.98 C 455.593 43.629 450.251 47.385 444.343 47.12 C 435.613 47.12 429.683 40.95 429.683 31.24 Z M 453.313 28.97 L 453.313 28.51 C 453.313 23.22 449.723 19.51 443.863 19.51 C 438.193 19.51 434.473 23.51 434.283 28.95 Z"></path>
    </g>
  </svg>
);

let logotypeVertSVG = (color = "off-black") => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1575 1034"
    fill={color}
  >
    <path d="M 88.769 761.473 L 159.704 761.473 C 196.334 761.473 216.773 780.389 216.773 811.45 C 216.773 842.51 196.334 861.947 159.704 861.947 L 107.605 861.947 L 107.605 938.094 L 88.769 938.094 Z M 159.223 844.273 C 183.71 844.273 197.336 832.25 197.336 811.45 C 197.336 790.649 183.71 779.147 159.223 779.147 L 107.685 779.147 L 107.685 844.273 Z M 217.534 878.379 C 217.534 840.746 242.261 815.257 278.13 815.257 C 313.998 815.257 338.966 840.746 338.966 878.379 C 338.966 916.012 314.239 941.501 278.13 941.501 C 242.021 941.501 217.534 915.972 217.534 878.379 Z M 278.13 924.829 C 303.378 924.829 320.05 906.153 320.05 878.379 C 320.05 850.605 303.378 831.929 278.13 831.929 C 252.882 831.929 236.45 850.605 236.45 878.379 C 236.45 906.153 253.122 924.829 278.13 924.829 Z M 342.492 818.543 L 361.689 818.543 L 391.987 917.495 L 422.284 818.543 L 443.244 818.543 L 473.542 917.775 L 503.599 818.543 L 522.796 818.543 L 484.643 938.215 L 463.202 938.215 L 432.824 839.744 L 402.246 938.215 L 380.725 938.215 Z M 526.563 878.379 C 526.563 840.746 549.767 815.257 583.872 815.257 C 603.55 815.257 618.458 823.272 626.273 836.698 L 626.273 761.473 L 644.468 761.473 L 644.468 938.215 L 628.076 938.215 L 628.076 917.775 C 620.061 932.924 604.832 941.501 583.992 941.501 C 549.767 941.501 526.563 915.972 526.563 878.379 Z M 586.397 924.829 C 610.884 924.829 626.794 906.153 626.794 878.379 C 626.794 850.605 610.763 831.929 586.397 831.929 C 562.031 831.929 545.479 850.605 545.479 878.379 C 545.479 906.153 561.91 924.829 586.397 924.829 Z M 662.662 877.698 C 662.662 838.822 686.107 815.097 719.971 815.097 C 753.836 815.097 775.758 837.821 775.758 873.409 C 775.788 876.957 775.614 880.503 775.237 884.03 L 681.057 884.03 C 682.34 909.76 697.328 925.791 721.374 925.791 C 735.853 926.523 749.255 918.159 754.958 904.83 L 773.473 904.83 C 766.46 927.47 745.05 942.523 721.374 941.461 C 686.387 941.501 662.662 916.733 662.662 877.698 Z M 757.443 868.76 L 757.443 866.997 C 757.443 845.796 743.055 830.927 719.571 830.927 C 696.847 830.927 681.939 846.958 681.177 868.8 Z M 793.511 818.543 L 809.903 818.543 L 809.903 837.62 C 812.428 825.903 823.197 817.835 835.151 818.704 L 858.916 818.704 L 858.916 834.735 L 833.588 834.735 C 817.918 834.735 811.586 844.313 811.586 861.987 L 811.586 938.135 L 793.511 938.135 Z M 874.225 761.473 L 892.38 761.473 L 892.38 833.612 C 900.395 820.988 914.382 815.177 930.773 815.177 C 960.309 815.177 978.865 832.57 978.865 866.436 L 978.865 938.215 L 960.67 938.215 L 960.67 867.758 C 960.67 843.031 948.046 831.929 927.847 831.929 C 906.887 831.929 892.5 846.798 892.5 868.52 L 892.5 938.215 L 874.345 938.215 Z M 994.374 878.379 C 994.374 840.746 1019.141 815.257 1054.969 815.257 C 1090.798 815.257 1115.845 840.746 1115.845 878.379 C 1115.845 916.012 1091.078 941.501 1054.969 941.501 C 1018.861 941.501 994.374 915.972 994.374 878.379 Z M 1054.969 924.829 C 1080.258 924.829 1096.889 906.153 1096.889 878.379 C 1096.889 850.605 1080.258 831.929 1054.969 831.929 C 1029.681 831.929 1013.33 850.605 1013.33 878.379 C 1013.33 906.153 1029.962 924.829 1054.969 924.829 Z M 1131.475 890.242 L 1131.475 818.543 L 1149.67 818.543 L 1149.67 888.959 C 1149.67 913.727 1161.693 924.829 1181.49 924.829 C 1201.929 924.829 1216.076 909.92 1216.076 888.198 L 1216.076 818.543 L 1234.351 818.543 L 1234.351 938.215 L 1217.92 938.215 L 1217.92 921.542 C 1209.905 935.169 1195.437 941.581 1178.525 941.581 C 1149.429 941.501 1131.475 924.067 1131.475 890.242 Z M 1310.737 922.063 C 1326.406 922.063 1335.504 914.729 1335.504 902.626 C 1335.504 892.526 1329.172 883.91 1315.466 883.91 L 1291.981 883.91 C 1268.216 883.91 1255.111 869.762 1255.111 851.848 C 1255.111 832.17 1269.498 818.543 1294.746 818.543 L 1346.845 818.543 L 1346.845 834.574 L 1294.466 834.574 C 1280.319 834.574 1273.746 841.387 1273.746 851.727 C 1273.746 860.304 1279.557 868.159 1293.784 868.159 L 1317.269 868.159 C 1342.237 868.159 1354.139 882.307 1354.139 902.506 C 1354.139 924.709 1338.109 938.094 1310.697 938.094 L 1258.998 938.094 L 1258.998 922.063 Z M 1365.802 877.698 C 1365.802 838.822 1389.246 815.097 1423.111 815.097 C 1456.975 815.097 1478.817 837.981 1478.817 873.69 C 1478.847 877.237 1478.673 880.783 1478.296 884.31 L 1384.116 884.31 C 1385.399 909.8 1400.548 925.951 1424.513 925.951 C 1438.992 926.684 1452.394 918.319 1458.097 904.99 L 1476.532 904.99 C 1469.519 927.63 1448.11 942.683 1424.433 941.621 C 1389.527 941.501 1365.802 916.733 1365.802 877.698 Z M 1460.462 868.6 L 1460.462 866.837 C 1460.462 845.636 1446.074 830.767 1422.59 830.767 C 1399.866 830.767 1384.958 846.798 1384.197 868.64 Z M 623.468 50.538 L 619.74 48.975 L 88.729 369.595 L 88.729 702.599 L 1479.779 702.599 L 1479.779 405.023 Z M 104.76 388.992 L 262.62 482.012 L 104.76 672.501 Z M 1087.431 259.943 L 1452.847 411.235 L 1293.504 486.701 Z M 1278.435 493.875 L 886.849 679.354 L 818.92 514.716 L 1066.552 260.744 Z M 812.267 498.604 L 636.733 73.382 L 1057.134 247.399 Z M 800.244 511.109 L 633.607 681.999 L 287.147 477.604 L 620.261 75.506 Z M 272.96 469.508 L 111.813 374.524 L 592.048 84.443 Z M 276.607 490.268 L 609.842 686.648 L 113.817 686.648 Z M 806.697 527.22 L 872.502 686.728 L 651.16 686.728 Z M 1289.656 506.259 L 1453.649 686.608 L 908.611 686.608 Z M 1304.805 499.085 L 1463.748 423.78 L 1463.748 674.024 Z"></path>
  </svg>
);

let logoSVG = (color = "off-black") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1392 654"
    fill={color}
  >
    <path
      d="M 535.468018 1.538025 L 531.73999 -0.025024 L 0.728996 320.594971 L 0.728996 653.598999 L 1391.779053 653.598999 L 1391.779053 356.02301 Z M 16.760002 339.992004 L 174.619995 433.011963 L 16.760002 623.500977 Z M 999.43103 210.942993 L 1364.847046 362.234985 L 1205.504028 437.700989 Z M 1190.435059 444.875 L 798.848999 630.354004 L 730.919983 465.716003 L 978.552002 211.744019 Z M 724.267029 449.604004 L 548.732971 24.382019 L 969.134033 198.398987 Z M 712.244019 462.109009 L 545.606995 632.999023 L 199.147003 428.604004 L 532.260986 26.505981 Z M 184.959991 420.507996 L 23.813004 325.523987 L 504.047974 35.442993 Z M 188.606995 441.268005 L 521.84198 637.64801 L 25.817001 637.64801 Z M 718.697021 478.219971 L 784.502014 637.728027 L 563.159973 637.728027 Z M 1201.656006 457.259033 L 1365.649048 637.607971 L 820.611023 637.607971 Z M 1216.805054 450.084961 L 1375.748047 374.780029 L 1375.748047 625.023987 Z"
    />
  </svg>
);

export {
  navMenuItems,
  socials,
  buttonSVGs,
  asteriskSVG,
  scribbleSVGs,
  logotypeHorizSVG,
  logotypeVertSVG,
  logoSVG,
};
