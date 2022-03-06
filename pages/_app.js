import "/styles/reset.css";
import "/styles/global.css";
// import "/styles/devgrid.css"; // Convenience grid from https://css-tricks.com/building-css-grid-overlay/
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export function reportWebVitals(metric) {
  // console.log(metric);
}
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Script
        src="https://kit.fontawesome.com/9945e8c92f.js"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
    </>
  );
}

export default MyApp;
