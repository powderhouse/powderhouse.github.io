import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetterSignUp from "../components/NewsLetter";

import {
  baseGrid,
  PageContainer,
  PageSection,
  Highlight,
} from "../components/global";

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

function HomePage({ data }) {
  return (
    <PageContainer css={baseGrid}>
      <PageSection css={baseGrid} isLightSection={false}>
        <Header bgColor="off-black" color="off-white" />

        <SplashLanguage>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {data.attributes.SplashLanguage}
          </ReactMarkdown>
        </SplashLanguage>

        <SplashNewsletterSignup>
          <SignUpShoutOut>{data.attributes.SignUpShoutOut}</SignUpShoutOut>
          <SignUpForm action="" method="get">
            <EmailInput type="email" name="email" id="email" required />
            <SubmitButton type="submit" value="Sign Up" />
          </SignUpForm>
        </SplashNewsletterSignup>
      </PageSection>

      <Footer />
    </PageContainer>
  );
}

let SplashLanguage = styled.div`
  grid-column: 2 / -2;

  background-color: var(--off-black);
  color: var(--off-white);
  width: 100%;
  padding-top: 144px; /*TK Explicit?*/
  font-size: 45px; /*TK Explicit?*/
`;

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

  padding-top: 62px; /*TK Explicit?*/
`;

let EmailInput = styled.input`
  grid-column: 1 / 2;
`;

let SubmitButton = styled.input`
  grid-column: 2 / 3;
`;

export async function getStaticProps(context) {
  return {
    props: await fetchAPI("/home"), // will be passed to the page component as props
  };
}

export default HomePage;
