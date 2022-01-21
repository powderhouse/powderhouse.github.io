import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ArrowButton from "../components/ArrowButton";
import NewsLetterSignUp from "../components/NewsLetterSignUp";

import {
  baseGrid,
  PageContainer,
  Region,
  RegionContainer,
  PageSection,
  Highlight,
  Markdown,
  Div,
} from "../components/global";

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

import { highlight } from "../components/global.js";
import { scribbleSVGs, logotypeHorizSVG } from "../site-data.js";

function HomePage({
  data: {
    attributes: { SplashLanguage, SignUpShoutOut },
  },
}) {
  return (
      <RegionContainer backgroundColor="--off-black">
        <Region>
          <Header />
        </Region>
        <Region style={{paddingBottom: "8rem"}}>
          <Splash markdown>{SplashLanguage}</Splash>

          <SplashNewsletterSignup>
            <ShoutOut>{SignUpShoutOut}</ShoutOut>
            <NewsLetterSignUp
              text="Sign Up!"
              color="off-white"
              buttonWidth="long"
              buttonThickness="thick"
              buttonTextLength="shortText"
            ></NewsLetterSignUp>
          </SplashNewsletterSignup>
        </Region>
        <Footer />
      </RegionContainer>
  );
}

let Splash = styled(Div)`
  grid-column: 2 / -2;
  width: 100%;
  font-size: 45px; // TODO: consider bread trail of pixels in calc, note the need to drop px in computing ratio
  letter-spacing: -0.6px;
  line-height: 1.422em;
  font-weight: 300;
  font-family: "GT Planar";
  padding: 6rem 0;
  p:not(:last-child) {
    padding-bottom: 3rem;
  } 
`;

let ShoutOut = styled.p`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  padding: 1em 0;
  height: 5rem;
  line-height: 1;
`;

let SplashNewsletterSignup = styled.div`
  grid-column: 4 / 10;

  display: grid;
  // TODO: Better way to inherit this?
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: min-content;
  column-gap: var(--gap);
  padding: 4rem 0;
  place-items: center;
`;

export async function getStaticProps(context) {
  return {
    props: await fetchAPI("/home"), // will be passed to the page component as props
  };
}

export default HomePage;
