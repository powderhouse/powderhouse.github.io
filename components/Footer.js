import styled from "styled-components";
import { useRouter } from "next/router";

import Icon from "../components/Icon.js";
import Region2 from "../components/Region2.js";
import NewsLetterSignUp from "../components/NewsLetterSignUp";
import { navMenuItems, socials, logotypeVertSVG } from "../site-data.js";

import {
  gap,
  expandColor,
  baseGrid,
  colorByProp,
  ShiftBy,
  highlight,
  complementaryColor,
} from "../components/global.js";

function Footer({ backgroundColor, accentColor, ...rest }) {
  let navItems = navMenuItems.slice();
  navItems.unshift({ text: "Home", href: "/" });
  const router = useRouter();

  return (
    <Region2 backgroundColor={backgroundColor}>
      <Wrapper {...rest}>
        <ContentContainer>
          <FooterNavigation>
            <NavList>
              {navItems.map((n, i) => {
                return (
                  <NavItem key={i}>
                    <NavLink href={n.href}>{n.text}</NavLink>
                  </NavItem>
                );
              })}
            </NavList>
          </FooterNavigation>
          <FooterContact>
            <NavList>
              <ContactNavItem>
                <NavLink href="https://goo.gl/maps/2BFLEfCzk8ML1YoH8">
                  339R Summer Street <br />
                  Somerville, MA 02144
                </NavLink>
              </ContactNavItem>
              <ContactNavItem>
                <NavLink href="mailto:us@powderhouse.org">
                  us@powderhouse.org
                </NavLink>
              </ContactNavItem>
              <ContactNavItem>
                <SocialList>
                  {socials.map((n) => {
                    return (
                      <IconListItem
                        href={n.href}
                        key={n.id}
                        icon={n.service.toLowerCase()}
                      ></IconListItem>
                    );
                  })}
                </SocialList>
              </ContactNavItem>
            </NavList>
          </FooterContact>
          {router.pathname != "/" ? (
            <>
              <FooterNewsletterSignup>
                <NewsLetterShoutOut>
                  If you'd like to keep up with our work, sign up for our mailing
                  list.
                </NewsLetterShoutOut>
                <NewsLetterSignUp
                  color="off-black"
                  text="Follow us!"
                  buttonWidth="long"
                  buttonThickness="thick"
                  buttonTextLength="longText"
                />
              </FooterNewsletterSignup>
              <LogoContainer>{logotypeVertSVG(expandColor(accentColor))}</LogoContainer>
            </>
          ) : (
            ""
          )
        }
        </ContentContainer>
      </Wrapper>
    </Region2>
  );
}

let IconListItem = ({ className, href, icon }) => {
  return (
    <li className={className}>
      <ShiftBy x={0} y={0}>
        <NavLink href={href}>
          <Icon icon={icon} />
        </NavLink>
      </ShiftBy>
    </li>
  );
};

let Wrapper = styled.footer`
  grid-column: 1 / -1;
  color: inherit;
  stroke: inherit;
  fill: inherit;
  ${baseGrid};
  ${(props) => colorByProp(props)};
  position: relative;
  padding-bottom: 1.3rem;
`;

let LogoContainer = styled.div`
  grid-column: 1 / -1;
  grid-column-start: 1;
  grid-row-start: 2;
  /*transform: rotate(180deg) scaleX(-1);*/
  /*filter:blur(1.3rem);*/
  /*opacity:0.3;*/
  pointer-events: none;
`;

let ContentContainer = styled.div`
  grid-column: 1 / -1;
  grid-column-start: 1;
  grid-row-start: 1;
  ${baseGrid};
  /*position:absolute;*/
  z-index: 1;
  padding-top: calc(2 * 1.3rem);
  /*bottom: 0;*/
`;

let FooterNavigation = styled.div`
  grid-column: 2 / 4;
`;

let NavList = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
  grid-column: 4 / 6;
`;

let NavItem = styled.li`
  display: flex;
  align-items: center;
`;

let ContactNavItem = styled(NavItem)`
  padding-bottom: calc(1.3rem / 4);
`;

let NavLink = styled.a`
  color: var(--off-black);
  text-decoration: none;
  line-height: 1.3rem;
`;

let SocialList = styled(NavList)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%; // TODO: Not on horizontal grid, but better looking?
`;

let FooterContact = styled.div`
  grid-column: 4 / 7;
`;

let FooterNewsletterSignup = styled.div`
  grid-column: 7 / 12;
`;

let NewsLetterShoutOut = styled.p`
  padding-bottom: calc(1.3rem / 4);
`;

export default Footer;