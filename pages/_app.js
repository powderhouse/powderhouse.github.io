import "/styles/reset.css";
import "/styles/global.css";
import "/styles/devgrid.css"; // Convenience grid from https://css-tricks.com/building-css-grid-overlay/

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
      {/* TODO: Add script the proper way; this throws a warning */}
      <script src="https://kit.fontawesome.com/9945e8c92f.js" crossOrigin="anonymous"></script>
    </>
  );
}

export default MyApp;
