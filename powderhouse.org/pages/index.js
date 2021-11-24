import styled from 'styled-components';

import Header from '../components/Header'
import Footer from '../components/Footer'
import GridWrapper from '../components/GridWrapper'

function HomePage() {
  return (
      <GridWrapper>
        <Header />

          <SplashLanguage>
            <p>
            We are a <Highlight color='blue'>research, design, and advocacy group</Highlight> devoted to realizing the <Highlight color='purple'>future of learning</Highlight> in practice through <Highlight color='yellow'>direct action with youth</Highlight>.
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

        <Footer/>
      </GridWrapper>
  );
}

let Highlight = styled.span`color: ${props => props.color}`;

let SplashLanguage = styled.div`
  grid-column: 2 / -2;
  border: 1px dotted black;
`

let SplashNewsletterSignup = styled.div`
  grid-column: 4 / span 6;
  border: 1px dotted black;
`

export default HomePage;
