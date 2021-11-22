import { navMenuItems } from '../site-data.js';
import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
      <FooterNavigation>
        <ol>
          {navMenuItems.map(n => {
            return <li key={n.href}><a href={n.href}>{n.text}</a></li>
          })}
        </ol>
      </FooterNavigation>
      <FooterContact>
        <div>
          339R Summer Street <br/>
          Somerville, MA 02144
        </div>
        <div>
          us@powderhouse.org
        </div>
        <ul>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
          <li>Facebook</li>
        </ul>
      </FooterContact>
      <FooterNewsletterSignup></FooterNewsletterSignup>
      </Wrapper>
  )
}

let Wrapper = styled.footer`
  background: blue;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  grid-column: 1 / -1;
`

let FooterNavigation = styled.div`
  grid-column: 1 / 4;
  border: 1px dotted black;
`
let FooterContact = styled.div`
  grid-column: 4 / 7;
  border: 1px dotted black;
`
let FooterNewsletterSignup = styled.div`
  grid-column: 7 / -1;
  border: 1px dotted black;
`
export default Footer;