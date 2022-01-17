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
  Div
} from "../components/global";

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

import { highlight } from "../components/global.js";

function HomePage({ data }) {
  return (
    <RegionContainer backgroundColor="--off-black">
      <Region css={baseGrid} isLightSection={false}>
        <Header />

        <SplashLanguage markdown>
            {data.attributes.SplashLanguage}
        </SplashLanguage>

        <SplashNewsletterSignup>
          <SignUpShoutOut>{data.attributes.SignUpShoutOut}</SignUpShoutOut>
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

let SplashLanguage = highlight(styled(Div)`
  grid-column: 2 / -2;
  background-color: var(--off-black);
  color: var(--off-white);
  width: 100%;
  font-size: 45px; /*TK Explicit?*/
`);

let SplashNewsletterSignup = styled.div`
  grid-column: 4 / 10;

  border: 1px dotted black;
  background-color: var(--off-black);
  color: var(--off-white);
  padding: 144px 0px; /*TK Explicit?*/
`;

let SignUpShoutOut = styled.p`
  font-size: 24px;
  text-align: center;
`;

let SignUpForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);
  height: 80px; /*TK Explicit?*/

  padding-top: 62px; /*TK Explicit?*/
`;

let EmailInput = styled.input`
  grid-column: 1 / 2;
`;

let SubmitButton = styled.button`
  grid-column: 2 / 3;
`;

export async function getStaticProps(context) {
  return {
    props: await fetchAPI("/home"), // will be passed to the page component as props
  };
}

export default HomePage;
