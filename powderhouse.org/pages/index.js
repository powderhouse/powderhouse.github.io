import styled from 'styled-components';

import Header from '../components/Header'
import Footer from '../components/Footer'

import {
  baseGrid,
  PageContainer,
  DarkPageSection,
  Highlight,
} from '../components/global'

function HomePage() {
  return (
      <PageContainer css={baseGrid}>
        <Header bgColor='off-black' color='off-white' />

        <DarkPageSection css={baseGrid}>
          <SplashLanguage>
            <p>
            We are a <Highlight highlight='blue'>research, design, and advocacy group</Highlight> devoted to realizing the <Highlight highlight='purple'>future of learning</Highlight> in practice through <Highlight highlight='yellow'>direct action with youth</Highlight>.
            </p>
            <p>
            Our work aims to demonstrate the very best our community—along with the public sector—could provide young people, right now, with enough imagination.
            </p>
          </SplashLanguage>

          <SplashNewsletterSignup>
            <form action='' method='get'>
                <input type='email' name='email' id='email' required />
                <input type="submit" value="Sign Up" />
            </form>
          </SplashNewsletterSignup>
        </DarkPageSection>

        <Footer/>
      </PageContainer>
  );
}

let SplashLanguage = styled.div`
  grid-column: 2 / -2;
  
  background-color:var(--off-black);
  color:var(--off-white);
  width:100%;
`;

let SplashNewsletterSignup = styled.div`
  grid-column: 4 / span 6;
  border: 1px dotted black;
  background-color:var(--off-black);
  color:var(--off-white);
`;

export default HomePage;
