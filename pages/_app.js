import "/styles/reset.css";
import "/styles/global.css";
// import "/styles/devgrid.css"; // Convenience grid from https://css-tricks.com/building-css-grid-overlay/
import Script from 'next/script'


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
      <Script src="https://kit.fontawesome.com/9945e8c92f.js" crossOrigin="anonymous" />
    </>
  );
}

export default MyApp;
