let navMenuItems = [
  { text: "About", href: "/about", color: "--red", scribbleNum: "1" },
  { text: "Team", href: "/team", color: "--purple", scribbleNum: "2" },
  { text: "Work", href: "/work", color: "--green", scribbleNum: "3" },
  { text: "News", href: "/news", color: "--yellow", scribbleNum: "1" },
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
      shortText: (
        className = "--off-black",
        height = "100%",
        width = "100%"
      ) => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 336 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 67 L 2 2 L 309.472 2 L 334.354 34.286 L 309.472 67 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 90 2 L 95 67 L 122 2 L 129.5 67 L 145.022 2 L 224.736 66 L 199.167 2 L 253.814 66 L 253.814 2 L 284.898 66 L 275.372 2 L 307.96 66 L 314.978 11"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      medText: (className = "--off-black", height = "100%", width = "100%") => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          width="336"
          height="69"
          viewBox="0 0 336 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 67 L 2 2 L 309.472 2 L 334.354 34.286 L 309.472 67 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 122 2 L 149.5 67 L 168 2 L 194.5 67 L 199 2 L 249 67 L 261 2 L 282.5 64.5 L 285 2 L 319 54.5"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      longText: (
        className = "--off-black",
        height = "100%",
        width = "100%"
      ) => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          width="336"
          height="69"
          viewBox="0 0 336 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 67 L 2 2 L 309.472 2 L 334.354 34.286 L 309.472 67 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 168 67 L 188.5 2 L 217.5 67 L 234.5 2 L 269.5 67 L 261 2 L 307.96 66 L 321.5 17.5"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
    },
    thin: {
      shortText: (
        className = "--off-black",
        height = "100%",
        width = "100%"
      ) => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 339 49"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 47.5 L 2 1.5 L 312.472 1.63 L 337.354 24.349 L 312.472 47.37 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 218.739 47 L 234.165 2 L 248.596 46.308 L 255.065 2 L 287.908 46.308 L 268.004 2 L 298.856 46.308 L 289.401 2 L 311.754 46.308 L 318.739 8.231"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 9 47 L 24.5 2 L 41.5 47 L 50 1.5 L 62.5 47.5 L 70 1.5 L 93.5 47 L 93.5 1.5 L 118.5 47.5 L 129.5 2"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      medText: (className = "--off-black", height = "100%", width = "100%") => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 339 49"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 47.5 L 2 1.5 L 311.472 1.63 L 336.354 24.349 L 311.472 47.37 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 218.5 1.5 L 237 47.5 L 240 2 L 256.5 47 L 271 2 L 271 47 L 283 2 L 304.5 45.962 L 311 2 L 321 38.346"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 4.5 1.5 L 17 47.5 L 39.5 1.5 L 52.5 47.5 L 69 1.5 L 79.5 47 L 83 1.5 L 97 46 L 100.5 1.5 L 119 47.5"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      longText: (
        className = "--off-black",
        height = "100%",
        width = "100%"
      ) => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 339 49"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 47.5 L 2 1.5 L 312.472 1.63 L 337.354 24.349 L 312.472 47.37 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 241 47 L 249.5 1.5 L 267.5 47 L 269.5 1.5 L 289.5 47.1 L 294.5 1.6 L 310.5 47.1 L 303 1.6 L 320 38.7 L 327.5 16.65"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 47 L 13.5 1.5 L 28.5 47 L 50.5 1.5 L 53.5 47 L 61.5 1.5 L 74.5 47 L 70 1.5 L 94.5 47 L 95.5 1.5"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
  },
  medium: {
    thick: {
      shortText: (
        className = "--off-black",
        height = "100%",
        width = "100%"
      ) => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 266 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 67 L 2 2 L 239.472 2 L 264.354 34.286 L 239.472 67 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 86 2 L 91 67 L 108 2 L 115.5 67 L 131 2 L 175.5 66 L 152 2 L 195 66 L 184.814 2 L 215.898 66 L 206.372 2 L 238.96 66 L 245.978 11"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      medText: (className = "--off-black", height = "100%", width = "100%") => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 266 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 67 L 2 2 L 239.472 2 L 264.354 34.286 L 239.472 67 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 110 2 L 149.5 67 L 138 2 L 174.5 67 L 199 2 L 199 67 L 211 2 L 232.5 65.5 L 239 2 L 249 54.5"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      longText: (
        className = "--off-black",
        height = "100%",
        width = "100%"
      ) => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 266 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 67 L 2 2 L 239.472 2 L 264.354 34.286 L 239.472 67 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 168 67 L 168.5 2 L 187.5 67 L 194.5 2 L 219.5 67 L 211 2 L 237.96 66 L 251.5 17.5"
            fill="transparent"
            strokeWidth="1"
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
      shortText: (
        className = "--off-black",
        height = "100%",
        width = "100%"
      ) => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 206 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 67 L 2 2 L 179.472 2 L 204.354 34.286 L 179.472 67 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 85.5 67 L 101 2 L 115.5 66 L 122 2 L 155 66 L 135 2 L 166 66 L 156.5 2 L 178.96 66 L 185.978 11"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      medText: (className = "--off-black", height = "100%", width = "100%") => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 206 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 67 L 2 2 L 179.472 2 L 204.354 34.286 L 179.472 67 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 124 67 L 127.5 2 L 132.5 67 L 151.5 2 L 157.5 67 L 160 2 L 187 55 L 194.5 23.5"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      longText: (
        className = "--off-black",
        height = "100%",
        width = "100%"
      ) => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 206 69"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 67 L 2 2 L 179.472 2 L 204.354 34.286 L 179.472 67 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray=""
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 156.5 67 L 161.5 2 L 177.5 67 L 170 2 L 187 55 L 194.5 23.5"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
    },
    thin: {
      shortText: (
        className = "--off-black",
        height = "100%",
        width = "100%"
      ) => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 206 49"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 47.37 L 2 1.63 L 179.472 1.63 L 204.354 24.349 L 179.472 47.37 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 85.739 47 L 101.165 2 L 115.596 46.308 L 122.065 2 L 154.908 46.308 L 135.004 2 L 165.856 46.308 L 156.401 2 L 178.754 46.308 L 185.739 8.231"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      medText: (className = "--off-black", height = "100%", width = "100%") => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 206 49"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 47.37 L 2 1.63 L 179.472 1.63 L 204.354 24.349 L 179.472 47.37 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 100 2 L 109.5 47 L 108 2 L 124.5 47 L 139 2 L 139 47 L 151 2 L 172.5 45.962 L 179 2 L 189 38.346"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          ></path>
        </svg>
      ),
      longText: (
        className = "--off-black",
        height = "100%",
        width = "100%"
      ) => (
        <svg
          className={
            "arrowSVG " + className.substring(0, 2) == "--"
              ? className.slice(2)
              : className
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 206 49"
          width={width}
          height={height}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 47.37 L 2 1.63 L 179.472 1.63 L 204.354 24.349 L 179.472 47.37 Z"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 156.5 47.1 L 161.5 1.6 L 177.5 47.1 L 170 1.6 L 187 38.7 L 194.5 16.65"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
  },
  naked: {
    short: {
      1: (className = "--off-black") => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 65 31"
          height="65"
          width="31"
          fill="transparent"
          strokeWidth="1"
          preserveAspectRatio="none"
          className={
            className.substring(0, 2) == "--" ? className.slice(2) : className
          }
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeDasharray=""
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2.194 28.897 L 2.194 2.208 L 53.346 2.208 L 63.046 15.426 L 53.346 28.897 Z"
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 51.5 3 L 43 27.5 L 29 3 L 23.5 27.5 L 19.5 3 L 13.5 27.5 L 3.5 3"
          ></path>
        </svg>
      ),
      2: (className = "--off-black") => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 27"
          height="67"
          width="27"
          fill="transparent"
          strokeWidth="1"
          class={
            className.substring(0, 2) == "--" ? className.slice(2) : className
          }
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeDasharray=""
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2 29 L 2 2 L 59.5 2 L 69 15.5 L 59.5 29 Z"
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 62.5 7 L 51.5 27.5 L 41.5 3 L 34 29 L 30.5 2 L 14.5 29 L 4 3"
          ></path>
        </svg>
      ),
      3: (className = "--off-black") => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 61 27"
          height="61"
          width="27"
          fill="transparent"
          strokeWidth="1"
          class={
            className.substring(0, 2) == "--" ? className.slice(2) : className
          }
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeDasharray=""
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2.194 28.897 L 2.194 2.208 L 53.346 2.208 L 63.046 15.426 L 53.346 28.897 Z"
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 58 10 L 43 27.5 L 38.5 3 L 23.5 27.5 L 32 2 L 13.5 27.5 L 10.5 3"
          ></path>
        </svg>
      ),
    },
    long: {
      1: (className = "--off-black") => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 98 27"
          height="98"
          width="27"
          fill="transparent"
          strokeWidth="1"
          className={
            className.substring(0, 2) == "--" ? className.slice(2) : className
          }
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeDasharray=""
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M 2.194 28.897 L 2.194 2.208 L 90.5 2 L 100 15.5 L 90.5 29 Z"
          ></path>
          <path
            vectorEffect="non-scaling-stroke"
            d="M 88 3 L 83 29 L 61 2 L 55 27.5 L 50.5 3 L 42 27.5 L 28 3 L 22.5 27.5 L 18.5 3 L 12.5 27.5 L 2.5 3"
          ></path>
        </svg>
      ),
    },
  },
};

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

let logotypeHorizSVG = (className = "--off-black") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 458 47"
    preserveAspectRatio="xMinYMin meet"
    stroke="transparent"
    className={
      className.substring(0, 2) == "--" ? className.slice(2) : className
    }
  >
    <g>
      <path
        vectorEffect="non-scaling-stroke"
        d="M 96.133 46.29 L 0.043 46.29 L 0.043 22.29 L 36.873 0 L 96.133 24.51 Z M 3.043 43.29 L 93.133 43.29 L 93.133 26.51 L 37.133 3.32 L 3.043 23.94 Z"
      ></path>
      <path
        vectorEffect="non-scaling-stroke"
        d="M 1.543 46.29 C 1.178 46.303 0.821 46.178 0.543 45.94 C -0.094 45.412 -0.183 44.468 0.343 43.83 L 35.903 0.97 C 36.433 0.332 37.38 0.245 38.018 0.775 C 38.656 1.305 38.743 2.252 38.213 2.89 L 2.693 45.75 C 2.409 46.091 1.988 46.289 1.543 46.29 Z"
      ></path>
      <path
        vectorEffect="non-scaling-stroke"
        d="M 37.323 46.11 C 37.051 46.11 36.784 46.034 36.553 45.89 L 1.043 24.51 C 0.554 24.25 0.248 23.741 0.247 23.187 C 0.247 22.633 0.552 22.123 1.041 21.862 C 1.53 21.601 2.123 21.631 2.583 21.94 L 37.093 42.72 L 66.153 13.56 C 66.44 13.268 66.834 13.109 67.243 13.12 C 67.655 13.128 68.046 13.305 68.323 13.61 L 95.323 43.27 C 95.739 43.656 95.902 44.245 95.743 44.79 C 95.583 45.335 95.13 45.744 94.571 45.845 C 94.012 45.947 93.444 45.724 93.103 45.27 L 67.203 16.77 L 38.393 45.67 C 38.109 45.953 37.724 46.111 37.323 46.11 Z"
      ></path>
      <path
        vectorEffect="non-scaling-stroke"
        d="M 54.783 45.88 C 54.599 45.881 54.415 45.847 54.243 45.78 C 53.859 45.638 53.554 45.34 53.403 44.96 L 35.793 2.51 C 35.554 2.009 35.611 1.416 35.942 0.97 C 36.273 0.523 36.824 0.297 37.373 0.381 C 37.923 0.464 38.38 0.845 38.563 1.37 L 55.563 42.37 L 93.563 24.45 C 94.314 24.099 95.207 24.424 95.558 25.175 C 95.909 25.926 95.584 26.819 94.833 27.17 L 55.423 45.74 C 55.224 45.836 55.005 45.884 54.783 45.88 Z M 111.043 2.2 L 128.743 2.2 C 137.883 2.2 142.983 6.93 142.983 14.67 C 142.983 22.41 137.883 27.27 128.743 27.27 L 115.743 27.27 L 115.743 46.27 L 111.043 46.27 Z M 128.613 22.86 C 134.733 22.86 138.133 19.86 138.133 14.67 C 138.133 9.48 134.733 6.61 128.613 6.61 L 115.763 6.61 L 115.763 22.86 Z M 143.173 31.37 C 143.173 21.98 149.343 15.62 158.293 15.62 C 167.243 15.62 173.473 21.98 173.473 31.37 C 173.473 40.76 167.303 47.12 158.293 47.12 C 149.283 47.12 143.173 40.76 143.173 31.37 Z M 158.293 42.96 C 164.593 42.96 168.753 38.3 168.753 31.37 C 168.753 24.44 164.593 19.78 158.293 19.78 C 151.993 19.78 147.893 24.44 147.893 31.37 C 147.893 38.3 152.043 42.96 158.293 42.96 Z M 174.353 16.44 L 179.143 16.44 L 186.703 41.14 L 194.263 16.44 L 199.493 16.44 L 207.043 41.2 L 214.543 16.44 L 219.333 16.44 L 209.813 46.3 L 204.463 46.3 L 196.903 21.73 L 189.273 46.3 L 183.923 46.3 Z M 220.283 31.37 C 220.283 21.98 226.073 15.62 234.583 15.62 C 239.493 15.62 243.213 17.62 245.163 20.97 L 245.163 2.2 L 249.703 2.2 L 249.703 46.3 L 245.603 46.3 L 245.603 41.2 C 243.653 44.98 239.813 47.12 234.603 47.12 C 226.043 47.12 220.283 40.76 220.283 31.37 Z M 235.213 42.96 C 241.323 42.96 245.293 38.3 245.293 31.37 C 245.293 24.44 241.293 19.78 235.213 19.78 C 229.133 19.78 225.043 24.44 225.043 31.37 C 225.043 38.3 229.103 42.96 235.213 42.96 Z M 254.233 31.24 C 254.233 21.54 260.093 15.62 268.543 15.62 C 276.993 15.62 282.463 21.29 282.463 30.17 C 282.471 31.055 282.428 31.94 282.333 32.82 L 258.833 32.82 C 259.153 39.18 262.933 43.21 268.913 43.21 C 272.526 43.393 275.87 41.306 277.293 37.98 L 281.893 37.98 C 280.143 43.629 274.801 47.385 268.893 47.12 C 260.163 47.12 254.233 40.95 254.233 31.24 Z M 277.863 28.97 L 277.863 28.51 C 277.863 23.22 274.273 19.51 268.413 19.51 C 262.743 19.51 259.023 23.51 258.833 28.95 Z M 286.873 16.44 L 290.963 16.44 L 290.963 21.16 C 291.593 18.236 294.28 16.223 297.263 16.44 L 303.183 16.44 L 303.183 20.44 L 296.883 20.44 C 292.983 20.44 291.403 22.83 291.403 27.24 L 291.403 46.24 L 286.873 46.24 Z M 307.043 2.2 L 311.573 2.2 L 311.573 20.2 C 313.573 17.05 317.053 15.6 321.153 15.6 C 328.523 15.6 333.153 19.95 333.153 28.39 L 333.153 46.3 L 328.613 46.3 L 328.613 28.72 C 328.613 22.55 325.463 19.78 320.423 19.78 C 315.193 19.78 311.603 23.49 311.603 28.91 L 311.603 46.3 L 307.043 46.3 Z M 337.043 31.37 C 337.043 21.98 343.223 15.62 352.163 15.62 C 361.103 15.62 367.353 21.98 367.353 31.37 C 367.353 40.76 361.173 47.12 352.163 47.12 C 343.153 47.12 337.043 40.76 337.043 31.37 Z M 352.163 42.96 C 358.463 42.96 362.623 38.3 362.623 31.37 C 362.623 24.44 358.463 19.78 352.163 19.78 C 345.863 19.78 341.743 24.44 341.743 31.37 C 341.743 38.3 345.903 42.96 352.133 42.96 Z M 371.223 34.33 L 371.223 16.44 L 375.763 16.44 L 375.763 34.01 C 375.763 40.19 378.763 43.01 383.703 43.01 C 388.803 43.01 392.333 39.29 392.333 33.88 L 392.333 16.44 L 396.863 16.44 L 396.863 46.3 L 392.773 46.3 L 392.773 42.14 C 390.773 45.55 387.163 47.14 382.943 47.14 C 375.703 47.12 371.223 42.77 371.223 34.33 Z M 415.953 42.27 C 419.863 42.27 422.133 40.44 422.133 37.42 C 422.133 34.9 420.553 32.76 417.133 32.76 L 411.273 32.76 C 405.343 32.76 402.073 29.23 402.073 24.76 C 402.073 19.85 405.663 16.45 411.963 16.45 L 424.963 16.45 L 424.963 20.45 L 411.963 20.45 C 408.433 20.45 406.793 22.15 406.793 24.73 C 406.793 26.88 408.243 28.83 411.793 28.83 L 417.653 28.83 C 423.883 28.83 426.843 32.36 426.843 37.4 C 426.843 42.94 422.843 46.28 416.013 46.28 L 403.043 46.28 L 403.043 42.28 Z M 429.683 31.24 C 429.683 21.54 435.543 15.62 443.993 15.62 C 452.443 15.62 457.913 21.29 457.913 30.17 C 457.921 31.055 457.878 31.94 457.783 32.82 L 434.283 32.82 C 434.603 39.18 438.383 43.21 444.363 43.21 C 447.976 43.393 451.32 41.306 452.743 37.98 L 457.343 37.98 C 455.593 43.629 450.251 47.385 444.343 47.12 C 435.613 47.12 429.683 40.95 429.683 31.24 Z M 453.313 28.97 L 453.313 28.51 C 453.313 23.22 449.723 19.51 443.863 19.51 C 438.193 19.51 434.473 23.51 434.283 28.95 Z"
      ></path>
    </g>
  </svg>
);

let logotypeVertSVG = (className = "--off-black") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1392 893"
    preserveAspectRatio="xMinYMin meet"
    className={
      className.substring(0, 2) == "--" ? className.slice(2) : className
    }
  >
    <path
      vectorEffect="non-scaling-stroke"
      stroke="none"
      d="M 0.768997 712.473022 L 71.703995 712.473022 C 108.334 712.473022 128.772995 731.388977 128.772995 762.450012 C 128.772995 793.51001 108.334 812.947021 71.703995 812.947021 L 19.605003 812.947021 L 19.605003 889.093994 L 0.768997 889.093994 Z M 71.223007 795.27301 C 95.710007 795.27301 109.335999 783.25 109.335999 762.450012 C 109.335999 741.648987 95.710007 730.146973 71.223007 730.146973 L 19.684998 730.146973 L 19.684998 795.27301 Z M 129.533997 829.379028 C 129.533997 791.745972 154.261002 766.257019 190.130005 766.257019 C 225.997986 766.257019 250.966003 791.745972 250.966003 829.379028 C 250.966003 867.012024 226.239014 892.500977 190.130005 892.500977 C 154.020996 892.500977 129.533997 866.971985 129.533997 829.379028 Z M 190.130005 875.828979 C 215.377991 875.828979 232.049988 857.153015 232.049988 829.379028 C 232.049988 801.60498 215.377991 782.929016 190.130005 782.929016 C 164.882004 782.929016 148.449997 801.60498 148.449997 829.379028 C 148.449997 857.153015 165.121994 875.828979 190.130005 875.828979 Z M 254.492004 769.54303 L 273.688995 769.54303 L 303.987 868.494995 L 334.283997 769.54303 L 355.243988 769.54303 L 385.541992 868.775024 L 415.598999 769.54303 L 434.796021 769.54303 L 396.643005 889.215027 L 375.201996 889.215027 L 344.824005 790.744019 L 314.246002 889.215027 L 292.725006 889.215027 Z M 438.562988 829.379028 C 438.562988 791.745972 461.767029 766.257019 495.872009 766.257019 C 515.549988 766.257019 530.458008 774.271973 538.27301 787.697998 L 538.27301 712.473022 L 556.468018 712.473022 L 556.468018 889.215027 L 540.075989 889.215027 L 540.075989 868.775024 C 532.060974 883.924011 516.83197 892.500977 495.992004 892.500977 C 461.767029 892.500977 438.562988 866.971985 438.562988 829.379028 Z M 498.396973 875.828979 C 522.883972 875.828979 538.794006 857.153015 538.794006 829.379028 C 538.794006 801.60498 522.763 782.929016 498.396973 782.929016 C 474.031006 782.929016 457.479004 801.60498 457.479004 829.379028 C 457.479004 857.153015 473.909973 875.828979 498.396973 875.828979 Z M 574.661987 828.697998 C 574.661987 789.822021 598.106995 766.096985 631.971008 766.096985 C 665.835999 766.096985 687.757996 788.820984 687.757996 824.408997 C 687.788025 827.95697 687.614014 831.502991 687.237 835.030029 L 593.057007 835.030029 C 594.340027 860.76001 609.328003 876.791016 633.374023 876.791016 C 647.853027 877.52301 661.255005 869.158997 666.958008 855.830017 L 685.473022 855.830017 C 678.460022 878.469971 657.049988 893.52301 633.374023 892.460999 C 598.387024 892.500977 574.661987 867.732971 574.661987 828.697998 Z M 669.442993 819.76001 L 669.442993 817.997009 C 669.442993 796.796021 655.054993 781.927002 631.570984 781.927002 C 608.846985 781.927002 593.939026 797.958008 593.177002 819.799988 Z M 705.510986 769.54303 L 721.903015 769.54303 L 721.903015 788.619995 C 724.427979 776.903015 735.197021 768.835022 747.151001 769.703979 L 770.916016 769.703979 L 770.916016 785.734985 L 745.588013 785.734985 C 729.91803 785.734985 723.585999 795.312988 723.585999 812.987 L 723.585999 889.13501 L 705.510986 889.13501 Z M 786.224976 712.473022 L 804.380005 712.473022 L 804.380005 784.612 C 812.39502 771.987976 826.382019 766.177002 842.77301 766.177002 C 872.309021 766.177002 890.86499 783.570007 890.86499 817.435974 L 890.86499 889.215027 L 872.669983 889.215027 L 872.669983 818.757996 C 872.669983 794.031006 860.046021 782.929016 839.846985 782.929016 C 818.887024 782.929016 804.5 797.797974 804.5 819.52002 L 804.5 889.215027 L 786.344971 889.215027 Z M 906.374023 829.379028 C 906.374023 791.745972 931.140991 766.257019 966.968994 766.257019 C 1002.797974 766.257019 1027.844971 791.745972 1027.844971 829.379028 C 1027.844971 867.012024 1003.078003 892.500977 966.968994 892.500977 C 930.861023 892.500977 906.374023 866.971985 906.374023 829.379028 Z M 966.968994 875.828979 C 992.258057 875.828979 1008.889038 857.153015 1008.889038 829.379028 C 1008.889038 801.60498 992.258057 782.929016 966.968994 782.929016 C 941.68103 782.929016 925.330017 801.60498 925.330017 829.379028 C 925.330017 857.153015 941.962036 875.828979 966.968994 875.828979 Z M 1043.474976 841.242004 L 1043.474976 769.54303 L 1061.670044 769.54303 L 1061.670044 839.958984 C 1061.670044 864.72699 1073.692993 875.828979 1093.48999 875.828979 C 1113.928955 875.828979 1128.07605 860.919983 1128.07605 839.197998 L 1128.07605 769.54303 L 1146.350952 769.54303 L 1146.350952 889.215027 L 1129.920044 889.215027 L 1129.920044 872.541992 C 1121.905029 886.169006 1107.437012 892.580994 1090.525024 892.580994 C 1061.428955 892.500977 1043.474976 875.067017 1043.474976 841.242004 Z M 1222.737061 873.062988 C 1238.406006 873.062988 1247.504028 865.729004 1247.504028 853.625977 C 1247.504028 843.526001 1241.171997 834.909973 1227.465942 834.909973 L 1203.980957 834.909973 C 1180.215942 834.909973 1167.110962 820.762024 1167.110962 802.848022 C 1167.110962 783.169983 1181.498047 769.54303 1206.745972 769.54303 L 1258.844971 769.54303 L 1258.844971 785.573975 L 1206.465942 785.573975 C 1192.31897 785.573975 1185.745972 792.387024 1185.745972 802.72699 C 1185.745972 811.304016 1191.557007 819.158997 1205.784058 819.158997 L 1229.269043 819.158997 C 1254.237061 819.158997 1266.139038 833.307007 1266.139038 853.505981 C 1266.139038 875.708984 1250.109009 889.093994 1222.697021 889.093994 L 1170.998047 889.093994 L 1170.998047 873.062988 Z M 1277.802002 828.697998 C 1277.802002 789.822021 1301.245972 766.096985 1335.110962 766.096985 C 1368.974976 766.096985 1390.817017 788.981018 1390.817017 824.690002 C 1390.847046 828.237 1390.672974 831.78302 1390.296021 835.309998 L 1296.115967 835.309998 C 1297.399048 860.799988 1312.547974 876.950989 1336.512939 876.950989 C 1350.991943 877.684021 1364.394043 869.31897 1370.097046 855.98999 L 1388.531982 855.98999 C 1381.519043 878.630005 1360.109985 893.682983 1336.432983 892.620972 C 1301.526978 892.500977 1277.802002 867.732971 1277.802002 828.697998 Z M 1372.462036 819.599976 L 1372.462036 817.836975 C 1372.462036 796.635986 1358.073975 781.767029 1334.589966 781.767029 C 1311.865967 781.767029 1296.958008 797.797974 1296.197021 819.640015 Z M 535.468018 1.538025 L 531.73999 -0.025024 L 0.728996 320.594971 L 0.728996 653.598999 L 1391.779053 653.598999 L 1391.779053 356.02301 Z M 16.760002 339.992004 L 174.619995 433.011963 L 16.760002 623.500977 Z M 999.43103 210.942993 L 1364.847046 362.234985 L 1205.504028 437.700989 Z M 1190.435059 444.875 L 798.848999 630.354004 L 730.919983 465.716003 L 978.552002 211.744019 Z M 724.267029 449.604004 L 548.732971 24.382019 L 969.134033 198.398987 Z M 712.244019 462.109009 L 545.606995 632.999023 L 199.147003 428.604004 L 532.260986 26.505981 Z M 184.959991 420.507996 L 23.813004 325.523987 L 504.047974 35.442993 Z M 188.606995 441.268005 L 521.84198 637.64801 L 25.817001 637.64801 Z M 718.697021 478.219971 L 784.502014 637.728027 L 563.159973 637.728027 Z M 1201.656006 457.259033 L 1365.649048 637.607971 L 820.611023 637.607971 Z M 1216.805054 450.084961 L 1375.748047 374.780029 L 1375.748047 625.023987 Z"
    />
  </svg>
);

let logoSVG = (className = "--off-black") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1392 654"
    preserveAspectRatio="xMinYMin meet"
    className={
      className.substring(0, 2) == "--" ? className.slice(2) : className
    }
  >
    <path
      vectorEffect="non-scaling-stroke"
      d="M 535.468018 1.538025 L 531.73999 -0.025024 L 0.728996 320.594971 L 0.728996 653.598999 L 1391.779053 653.598999 L 1391.779053 356.02301 Z M 16.760002 339.992004 L 174.619995 433.011963 L 16.760002 623.500977 Z M 999.43103 210.942993 L 1364.847046 362.234985 L 1205.504028 437.700989 Z M 1190.435059 444.875 L 798.848999 630.354004 L 730.919983 465.716003 L 978.552002 211.744019 Z M 724.267029 449.604004 L 548.732971 24.382019 L 969.134033 198.398987 Z M 712.244019 462.109009 L 545.606995 632.999023 L 199.147003 428.604004 L 532.260986 26.505981 Z M 184.959991 420.507996 L 23.813004 325.523987 L 504.047974 35.442993 Z M 188.606995 441.268005 L 521.84198 637.64801 L 25.817001 637.64801 Z M 718.697021 478.219971 L 784.502014 637.728027 L 563.159973 637.728027 Z M 1201.656006 457.259033 L 1365.649048 637.607971 L 820.611023 637.607971 Z M 1216.805054 450.084961 L 1375.748047 374.780029 L 1375.748047 625.023987 Z"
    />
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

export {
  navMenuItems,
  socials,
  buttonSVGs,
  asteriskSVG,
  logotypeHorizSVG,
  logotypeVertSVG,
  logoSVG,
  mediaQueries,
};
