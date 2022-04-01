import "/styles/reset.css";
import "/styles/global.css";
// import "/styles/devgrid.css"; // Convenience grid from https://css-tricks.com/building-css-grid-overlay/
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load('YOUR_FATHOM_TRACKING_CODE', {
      includedDomains: ['powderhouse.org'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

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
