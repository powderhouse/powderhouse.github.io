import { navMenuItems, socialMediaLinks } from '../site-data.js';
import styled from 'styled-components';

import { gap, baseGrid } from '../components/global.js';

function Footer() {
  return (
    <Wrapper css={baseGrid}>
      <FooterNavigation>
        <h4>Navigation</h4>
        <NavList>
          {navMenuItems.map(n => {
            return <li key={n.href}><NavLink href={n.href}>{n.text}</NavLink></li>
          })}
        </NavList>
      </FooterNavigation>
      <FooterContact>
        <h4>Contact</h4>
        <div>
          <a href="https://goo.gl/maps/2BFLEfCzk8ML1YoH8">
            339R Summer Street <br/>
            Somerville, MA 02144
          </a>
        </div>
        <div>
          <a href="mailto:us@powderhouse.org">us@powderhouse.org</a>
        </div>
      </FooterContact>
      <FooterNewsletterSignup>
        <SignUpShoutOut>Follow us on social media or join our mailing list to keep up with our work.</SignUpShoutOut>
        <SocialList>
          {socialMediaLinks.map(n => {
            return <SocialLink key={n.id} href={n.href}><SocialListItem key={n.id}>{n.text}</SocialListItem></SocialLink>
          })}
        </SocialList>
        <SignUpForm action='' method='get'>
          <EmailInput type='email' name='email' id='email' required />
          <SubmitButton type="submit" value="Sign Up" />
        </SignUpForm>
      </FooterNewsletterSignup>
      </Wrapper>
  )
}

let Wrapper = styled.footer`
  grid-column: 1 / -1;

  background-color: var(--off-white);
  color: var(--off-black);
  padding: var(--gap);
  padding-top:90px; /*TK Explicit?*/
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

let SocialList = styled(NavList)`
  display:flex;
`;

let SocialListItem = styled.li`
  padding:calc(var(--gap)/2);
`;

let SocialLink = styled(NavLink)`
  flex:1;
`;

let FooterContact = styled.div`
  grid-column: 4 / 7;
  border: 1px dotted black;
`;

let FooterNewsletterSignup = styled.div`
  grid-column: 7 / -1;
  
  border: 1px dotted black;
`;

let SignUpShoutOut = styled.h4``;

let SignUpForm = styled.form`
  display:flex;
  flex-direction:column;
`;

let EmailInput = styled.input`
  grid-column: 1 / -1;
  height:var(--gap);
  margin-bottom:calc(var(--gap)/2);
`;

let SubmitButton = styled.input`
  grid-column: 1 / -1;
  height:var(--gap);
  margin-bottom:calc(var(--gap)/2);
`;

export default Footer;