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

function HomePage({ data: { attributes: { SplashLanguage, SignUpShoutOut } } }) {
  return (
    <RegionContainer backgroundColor="--off-black">
      <Region padded>
        <Header />

        <Splash markdown>{SplashLanguage}</Splash>

        <SplashNewsletterSignup backgroundColor="--off-black">
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
      <Footer />;
    </RegionContainer>
  );
}

let Splash = highlight(styled(Div)`
  grid-column: 2 / -2;
  background-color: var(--off-black);
  color: var(--off-white);
  width: 100%;
  font-size: 2.64rem; // TODO: consider bread trail of pixels in calc, note the need to drop px in computing ratio
`);

let ShoutOut = styled.p`
  font-size: 24px;
  text-align: center;
`;

let SplashNewsletterSignup = styled.div`
  grid-column: 4 / 10;

  border: 1px dotted black;
  padding-top: 8.47rem;
`;

export async function getStaticProps(context) {
  return {
    props: await fetchAPI("/home"), // will be passed to the page component as props
  };
}

export default HomePage;
