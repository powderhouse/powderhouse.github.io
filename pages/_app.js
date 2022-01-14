import "/styles/reset.css";
import "/styles/global.css";
import "/styles/devgrid.css"; // Convenience grid from https://css-tricks.com/building-css-grid-overlay/

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
