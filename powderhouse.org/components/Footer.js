import { navMenuItems } from '../site-data.js';
import styled from 'styled-components';

import { gap, baseGrid } from '../components/global.js';

function Footer() {
  return (
    <Wrapper css={baseGrid}>
      <FooterNavigation>
        <NavList>
          {navMenuItems.map(n => {
            return <li key={n.href}><NavLink href={n.href}>{n.text}</NavLink></li>
          })}
        </NavList>
      </FooterNavigation>
      <FooterContact>
        <div>
          339R Summer Street <br/>
          Somerville, MA 02144
        </div>
        <div>
          us@powderhouse.org
        </div>
        <NavList>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
          <li>Facebook</li>
        </NavList>
      </FooterContact>
      <FooterNewsletterSignup></FooterNewsletterSignup>
      </Wrapper>
  )
}

let Wrapper = styled.footer`
  grid-column: 1 / -1;

  background-color: var(--off-white);
  color: var(--off-black);
`;

let FooterNavigation = styled.div`
  grid-column: 1 / 4;
  border: 1px dotted black;
`;

let NavList = styled.ol`
  list-style-type:none;
  padding:0;
  margin:0;
`;

let NavLink = styled.a`
  color: var(--off-black);
  text-decoration: none;
`;

let FooterContact = styled.div`
  grid-column: 4 / 7;
  border: 1px dotted black;
`;

let FooterNewsletterSignup = styled.div`
  grid-column: 7 / -1;
  border: 1px dotted black;
`;

export default Footer;