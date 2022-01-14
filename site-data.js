let navMenuItems = [
    {text: 'About', href:'/about'},
    {text: 'Team', href:'/team'},
    {text: 'Work', href:'/work'},
    {text: 'News', href:'/news'}
  ];

let socialMediaLinks = [
    {text: 'Twitter', href:'https://twitter.com/powderhs'},
    {text: 'Facebook', href:'https://www.facebook.com/powderhousestudios'},
    {text: 'Instagram', href:'https://www.instagram.com/powderhs/'},
    {text: 'YouTube', href:'https://www.youtube.com/channel/UCtTU6mxTNn0GxbxnzT3zrEQ'},
];
socialMediaLinks.forEach(l => l.id = l.text.toLowerCase() + '-' + 'social')

let buttonSVGs = {
    long: {
      thick: {
        shortText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="336" height="69"><path d="M 2 67 L 2 2 L 309.472 2 L 334.354 34.286 L 309.472 67 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray=""></path><path d="M 90 2 L 95 67 L 122 2 L 129.5 67 L 145.022 2 L 224.736 66 L 199.167 2 L 253.814 66 L 253.814 2 L 284.898 66 L 275.372 2 L 307.96 66 L 314.978 11" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></svg>),
        medText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="336" height="69"><path d="M 2 67 L 2 2 L 309.472 2 L 334.354 34.286 L 309.472 67 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray=""></path><path d="M 122 2 L 149.5 67 L 168 2 L 194.5 67 L 199 2 L 249 67 L 261 2 L 282.5 64.5 L 285 2 L 319 54.5" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></svg>),
        longText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="336" height="69"><path d="M 2 67 L 2 2 L 309.472 2 L 334.354 34.286 L 309.472 67 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray=""></path><path d="M 168 67 L 188.5 2 L 217.5 67 L 234.5 2 L 269.5 67 L 261 2 L 307.96 66 L 321.5 17.5" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></svg>)
      },
      thin: {
        shortText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="339" height="49"><path d="M 2 47.5 L 2 1.5 L 312.472 1.63 L 337.354 24.349 L 312.472 47.37 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></path><path d="M 218.739 47 L 234.165 2 L 248.596 46.308 L 255.065 2 L 287.908 46.308 L 268.004 2 L 298.856 46.308 L 289.401 2 L 311.754 46.308 L 318.739 8.231" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path><path d="M 9 47 L 24.5 2 L 41.5 47 L 50 1.5 L 62.5 47.5 L 70 1.5 L 93.5 47 L 93.5 1.5 L 118.5 47.5 L 129.5 2" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></svg>),
        medText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="338" height="49"><path d="M 2 47.5 L 2 1.5 L 311.472 1.63 L 336.354 24.349 L 311.472 47.37 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></path><path d="M 218.5 1.5 L 237 47.5 L 240 2 L 256.5 47 L 271 2 L 271 47 L 283 2 L 304.5 45.962 L 311 2 L 321 38.346" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path><path d="M 4.5 1.5 L 17 47.5 L 39.5 1.5 L 52.5 47.5 L 69 1.5 L 79.5 47 L 83 1.5 L 97 46 L 100.5 1.5 L 119 47.5" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></svg>),
        longText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="339" height="49"><path d="M 2 47.5 L 2 1.5 L 312.472 1.63 L 337.354 24.349 L 312.472 47.37 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></path><path d="M 241 47 L 249.5 1.5 L 267.5 47 L 269.5 1.5 L 289.5 47.1 L 294.5 1.6 L 310.5 47.1 L 303 1.6 L 320 38.7 L 327.5 16.65" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M 2 47 L 13.5 1.5 L 28.5 47 L 50.5 1.5 L 53.5 47 L 61.5 1.5 L 74.5 47 L 70 1.5 L 94.5 47 L 95.5 1.5" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>)
      }
    },
    medium: {
      thick: {
        shortText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="266" height="69"><path d="M 2 67 L 2 2 L 239.472 2 L 264.354 34.286 L 239.472 67 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray=""></path><path d="M 86 2 L 91 67 L 108 2 L 115.5 67 L 131 2 L 175.5 66 L 152 2 L 195 66 L 184.814 2 L 215.898 66 L 206.372 2 L 238.96 66 L 245.978 11" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></svg>),
        medText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="266" height="69"><path d="M 2 67 L 2 2 L 239.472 2 L 264.354 34.286 L 239.472 67 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray=""></path><path d="M 110 2 L 149.5 67 L 138 2 L 174.5 67 L 199 2 L 199 67 L 211 2 L 232.5 65.5 L 239 2 L 249 54.5" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></svg>),
        longText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="266" height="69"><path d="M 2 67 L 2 2 L 239.472 2 L 264.354 34.286 L 239.472 67 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray=""></path><path d="M 168 67 L 168.5 2 L 187.5 67 L 194.5 2 L 219.5 67 L 211 2 L 237.96 66 L 251.5 17.5" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></svg>)
      }
    },
    short: {
      thick: {
        shortText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="206" height="69"><path d="M 2 67 L 2 2 L 179.472 2 L 204.354 34.286 L 179.472 67 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray=""></path><path d="M 85.5 67 L 101 2 L 115.5 66 L 122 2 L 155 66 L 135 2 L 166 66 L 156.5 2 L 178.96 66 L 185.978 11" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></svg>),
        medText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="206" height="69"><path d="M 2 67 L 2 2 L 179.472 2 L 204.354 34.286 L 179.472 67 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray=""></path><path d="M 124 67 L 127.5 2 L 132.5 67 L 151.5 2 L 157.5 67 L 160 2 L 187 55 L 194.5 23.5" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></svg>),
        longText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="206" height="69"><path d="M 2 67 L 2 2 L 179.472 2 L 204.354 34.286 L 179.472 67 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray=""></path><path d="M 156.5 67 L 161.5 2 L 177.5 67 L 170 2 L 187 55 L 194.5 23.5" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></svg>)
      },
      thin: {
        shortText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="206" height="49"><path d="M 2 47.37 L 2 1.63 L 179.472 1.63 L 204.354 24.349 L 179.472 47.37 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></path><path d="M 85.739 47 L 101.165 2 L 115.596 46.308 L 122.065 2 L 154.908 46.308 L 135.004 2 L 165.856 46.308 L 156.401 2 L 178.754 46.308 L 185.739 8.231" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></svg>),
        medText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="206" height="49"><path d="M 2 47.37 L 2 1.63 L 179.472 1.63 L 204.354 24.349 L 179.472 47.37 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></path><path d="M 100 2 L 109.5 47 L 108 2 L 124.5 47 L 139 2 L 139 47 L 151 2 L 172.5 45.962 L 179 2 L 189 38.346" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=""></path></svg>),
        longText:(color="off-black") => (<svg className={"arrowSVG "+color} xmlns="http://www.w3.org/2000/svg" width="206" height="49"><path d="M 2 47.37 L 2 1.63 L 179.472 1.63 L 204.354 24.349 L 179.472 47.37 Z" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></path><path d="M 156.5 47.1 L 161.5 1.6 L 177.5 47.1 L 170 1.6 L 187 38.7 L 194.5 16.65" fill="transparent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>)
      }
    }
  };

let asteriskSVG = (color="off-black") => (<svg className={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 0 43.712 L 88.25 26.838 M 57.055 78.651 L 27.423 0 M 23.298 65.652 L 57.156 8.351 M 67.46 48.363 L 7.632 19.816" transform="translate(16.593 22.028) rotate(-51 44.125 39.325)" fill="transparent" strokeWidth="2.95" strokeLinecap="square" strokeLinejoin="round"></path></svg>);

export { navMenuItems, socialMediaLinks, buttonSVGs, asteriskSVG }