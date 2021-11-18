import styled from 'styled-components';

import Header from '../components/Header'
import Footer from '../components/Footer'

function HomePage() {

  let Highlight = styled.span`color: ${props => props.color}`;

  return (
    <>
      <Header />

      <div id='splash-language'>
        <p>
        We are a <Highlight color='blue'>research, design, and advocacy group</Highlight> devoted to realizing the <Highlight color='purple'>future of learning</Highlight> in practice through <Highlight color='yellow'>direct action with youth</Highlight>.
        </p>
        <p>
        Our work aims to demonstrate the very best our community—along with the public sector—could provide young people, right now, with enough imagination.
        </p>
      </div>

      <div id='splash-newsletter-signup'>
      <form action='' method='get'>
          <input type='email' name='email' id='email' required />
          <input type="submit" value="Sign Up" />
      </form>
      </div>

      <Footer/>
      
    </>
  );
}

export default HomePage;
