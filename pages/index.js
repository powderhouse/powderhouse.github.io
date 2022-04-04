import styled from "styled-components";

import SEO from "../components/SEO";
import { fetchAPI } from "../lib/api";
import { mediaQueries } from "../site-data";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetterSignUp from "../components/NewsLetterSignUp";
import PageContainer2 from "../components/PageContainer2";
import Region2 from "../components/Region2";
import { Div } from "../components/global";

let SplashDiv = styled(Div)`
  grid-column: 2 / -2;
  width: 100%;
  // TODO: Observed column width via Framer, any way to make dependent on column width?
  padding: calc(141px - 2 * var(--gap)) 0;
  p {
    // TODO: Check whether this is right
    font-size: var(--xxxlarge-font-size);
    line-height: var(--xxxlarge-line-height);
    letter-spacing: -0.6px; // TODO: Add letter-spacings to type hierarchy
    font-weight: 300;
    font-family: "GT Planar";
  }
  p:not(:last-child) {
    padding-bottom: 1.35em;
  }

  @media ${mediaQueries.uptoTablet} {
    grid-column: 1 / -1;
    padding: calc(141px - 3 * var(--gap)) 0;

    p {
      font-size: var(--xxlarge-font-size);
      line-height: var(--xxlarge-line-height);
      font-weight: 100;
    }
  }

  @media ${mediaQueries.uptoMobile} {
    padding: 0;
    p {
      font-size: var(--medium-font-size);
      line-height: var(--medium-line-height);
    }
  }
`;

function Splash({ children, ...rest }) {
  return (
    <Region2 {...rest}>
      <SplashDiv markdown>{children}</SplashDiv>
    </Region2>
  );
}

let SplashNewsletterSignupDiv = styled.div`
  grid-column: 4 / 10;

  display: grid;
  // TODO: Better way to inherit this?
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content;
  // TODO: We should probably make the verticaly rhythm and the column gap the same
  column-gap: var(--gap);
  row-gap: var(--vertical-rhythm);
  padding-bottom: 8em;
  place-items: center;
  text-align: center;

  @media ${mediaQueries.uptoTablet} {
    grid-column: 1 / -1;
    grid-template-columns: repeat(6, 1fr);
    padding-bottom: 0;
  }
  @media ${mediaQueries.uptoMobile} {
    grid-template-columns: repeat(3, 1fr);
    padding-top: calc(1.5 * var(--vertical-rhythm));
  }
`;

function SplashNewsletterSignup({ children, ...rest }) {
  return (
    <Region2 {...rest}>
      <SplashNewsletterSignupDiv {...rest}>
        {children}
      </SplashNewsletterSignupDiv>
    </Region2>
  );
}
function HomePage(
{
  data: {
    attributes: { SplashLanguage, SignUpShoutOut, Meta },
  },
}
) {
  let accentColor = "--off-black";

  let regions = [
    <Header
      backgroundColor="--off-black"
      key="header"
      activeScribbleColor={accentColor}
    />,
    <Splash backgroundColor={accentColor} markdown key="splash">
      {SplashLanguage}
    </Splash>,
    <SplashNewsletterSignup backgroundColor="--off-black" key="newsletter">
      <NewsLetterSignUp
        text="Sign Up!"
        $color="--off-white"
        buttonWidth="long"
        buttonThickness="thick"
        buttonTextLength="longText"
        backgroundColor="--off-black"
        isHomePage={true}
        shoutOut={SignUpShoutOut}
      />
    </SplashNewsletterSignup>,
    <Footer
      backgroundColor="--off-black"
      accentColor={accentColor}
      key="footer"
    />,
  ];

  return (
    <>
      <SEO meta={Meta} />
      <PageContainer2>{regions}</PageContainer2>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: await fetchAPI("/home?populate=*"),
  };
}

export default HomePage;
