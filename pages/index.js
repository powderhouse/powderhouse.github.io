import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetterSignUp from "../components/NewsLetterSignUp";
import PageContainer2 from "../components/PageContainer2";
import Region2 from "../components/Region2";

import { fetchAPI } from "../lib/api";
import { ShiftBy, Div, complementaryColor } from "../components/global";
import { mediaQueries } from "../site-data";
import Head from "next/head";

let SplashDiv = styled(Div)`
  grid-column: 2 / -2;
  width: 100%;
  // TODO: Observed column width via Framer, any way to make dependent on column width?
  padding: calc(141px - 2 * var(--gap)) 0;
  p {
    font-size: var(--title-font-size);
    letter-spacing: -0.6px; // TODO: Add letter-spacings to type hierarchy
    line-height: var(--title-line-height);
    font-weight: 300;
    font-family: "GT Planar";
  }
  p:not(:last-child) {
    padding-bottom: calc(2 * 1.3rem);
  }

  @media ${mediaQueries.uptoTablet} {
    grid-column: 1 / -1;
    // TODO: Check if we need this
    // font-size: 36px;
    // line-height: calc(2 * 1.3rem);
    // padding: calc(2 * 1.3rem) 0;
  }

  @media ${mediaQueries.uptoMobile} {
    // TODO: Check if we need this
    // font-size: 28px;
  }
`;

function Splash({ children, ...rest }) {
  return (
    <Region2 {...rest}>
      <SplashDiv markdown>{children}</SplashDiv>
    </Region2>
  );
}

let ShoutOut = styled.p`
  grid-column: 1 / -1;
  padding: 1.3rem 0;
  height: calc(4 * 1.3rem);
  line-height: 1;
`;

let SplashNewsletterSignupDiv = styled.div`
  grid-column: 4 / 10;

  display: grid;
  // TODO: Better way to inherit this?
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content;
  column-gap: var(--gap);
  row-gap: 1.3rem;
  padding: 0 0 calc(6 * 1.3rem);
  place-items: center;
  text-align: center;

  @media ${mediaQueries.uptoTablet} {
    grid-column: 1 / -1;
    grid-template-columns: repeat(6, 1fr);
  }
  @media ${mediaQueries.uptoMobile} {
    grid-template-columns: repeat(3, 1fr);
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
function HomePage({
  data: {
    attributes: { SplashLanguage, SignUpShoutOut },
  },
}) {
  let accentColor = "--off-black";

  let regions = [
    <Header backgroundColor="--off-black" key="header" />,
    <Splash backgroundColor={accentColor} markdown key="splash">
      {SplashLanguage}
    </Splash>,
    <SplashNewsletterSignup backgroundColor="--off-black" key="newsletter">
      <ShoutOut>{SignUpShoutOut}</ShoutOut>
      <NewsLetterSignUp
        text="Sign Up!"
        $color="--off-white"
        buttonWidth="long"
        buttonThickness="thick"
        buttonTextLength="medText"
        backgroundColor="--off-black"
        isHomePage={true}
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
      <Head>
        <title>Powderhouse</title>
      </Head>
      <PageContainer2>
        {/*TODO: Some way to avoid cloning to add keys?  Maybe in PageContainer?*/}
        {regions}
      </PageContainer2>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: await fetchAPI("/home"),
    revalidate: 1000, // will be passed to the page component as props
  };
}

export default HomePage;
