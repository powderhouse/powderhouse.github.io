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

import { highlight, ShiftBy } from "../components/global.js";
import { scribbleSVGs, logotypeHorizSVG } from "../site-data.js";

function HomePage({
  data: {
    attributes: { SplashLanguage, SignUpShoutOut },
  },
}) {
  let regionRuns = [
    {
      backgroundColor: "--off-black",
      regions: [
        <Header />,
        <>
          <Splash markdown>{SplashLanguage}</Splash>

          <SplashNewsletterSignup>
            <ShoutOut>{SignUpShoutOut}</ShoutOut>
            <NewsLetterSignUp
              text="Sign Up!"
              color="off-white"
              buttonWidth="long"
              buttonThickness="thick"
              buttonTextLength="medText"
            ></NewsLetterSignUp>
          </SplashNewsletterSignup>
        </>,
      ],
    },
    {
      backgroundColor: "--off-white",
      regions: [<Footer />],
    },
  ];
  return (
    <>
    {
      regionRuns.map(({backgroundColor, regions}) => {
        return (
          <RegionContainer backgroundColor={backgroundColor}>
            {regions.map(r => <Region>{r}</Region>)}
          </RegionContainer>
          )
      })
    }
    </>
  );
}

let Splash = styled(Div)`
  grid-column: 2 / -2;
  width: 100%;
  font-size: 45px; // TODO: consider bread trail of pixels in calc, note the need to drop px in computing ratio
  letter-spacing: -0.6px;
  line-height: calc(3 * 1.3rem);
  font-weight: 300;
  font-family: "GT Planar";
  padding: calc(5 * 1.3rem) 0;
  p:not(:last-child) {
    padding-bottom: calc(2 * 1.3rem);
  }
`;

let ShoutOut = styled.p`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  padding: 1.3rem 0;
  height: calc(4 * 1.3rem);
  line-height: 1;
`;

let SplashNewsletterSignup = styled.div`
  grid-column: 4 / 10;

  display: grid;
  // TODO: Better way to inherit this?
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: min-content;
  column-gap: var(--gap);
  row-gap: 1.3rem;
  padding: 0 0 calc(6 * 1.3rem);
  place-items: center;
`;

export async function getStaticProps(context) {
  return {
    props: await fetchAPI("/home"), // will be passed to the page component as props
  };
}

export default HomePage;
