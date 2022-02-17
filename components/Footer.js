import styled from "styled-components";
import { useRouter } from "next/router";

import Icon from "../components/Icon.js";
import Region2 from "../components/Region2.js";
import NewsLetterSignUp from "../components/NewsLetterSignUp";
import { navMenuItems, socials, logotypeVertSVG, mediaQueries } from "../site-data.js";

import {
  gap,
  expandColor,
  baseGrid,
  colorByProp,
  ShiftBy,
  highlight,
} from "../components/global.js";

function Footer({ backgroundColor, accentColor, ...rest }) {
  let navItems = navMenuItems.slice();
  navItems.unshift({ text: "Home", href: "/" });
  const router = useRouter();

  return (
    <Region2 backgroundColor={backgroundColor}>
      <Wrapper backgroundColor={backgroundColor} {...rest}>
        <ContentContainer>
          <FooterNavigation className={router.pathname != "/" ? "" : "home"} >
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
          <FooterContact className={router.pathname != "/" ? "" : "home"} >
            {/* <NavList> */}
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
            {/* </NavList> */}
          </FooterContact>
          {router.pathname != "/" ? (
            <>
              <FooterNewsletterSignup backgroundColor={backgroundColor} >
                <NewsLetterShoutOut>
                  {`If you'd like to keep up with our work, sign up for our
                  mailing list.`}
                </NewsLetterShoutOut>
                <NewsLetterSignUp
                  color="off-black"
                  text="Follow us!"
                  buttonWidth="long"
                  buttonThickness="thick"
                  buttonTextLength="longText"
                />
              </FooterNewsletterSignup>
              <LogoContainer>
                {logotypeVertSVG(accentColor)}
              </LogoContainer>
            </>
          ) : (
            ""
          )}
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
  padding-top: calc(4 * 1.3rem);
`;

let LogoContainer = styled.div`
  grid-column: 1 / -1;
  grid-column-start: 1;
  grid-row-start: 2;
  /*transform: rotate(180deg) scaleX(-1);*/
  /*filter:blur(1.3rem);*/
  /*opacity:0.3;*/
  pointer-events: none;

  @media ${mediaQueries.uptoTablet} {
    grid-row-start:3;
  }
`;

let ContentContainer = styled.div`
  grid-column: 1 / -1;
  grid-column-start: 1;
  grid-row-start: 1;
  ${baseGrid};
  z-index: 1;
  padding-bottom: var(--gap);
`;

let FooterNavigation = styled.div`
  grid-column: 2 / 3;

  @media ${mediaQueries.uptoTablet} {
    grid-column: 1 / 2;
  }
  @media ${mediaQueries.uptoMobile} {
    grid-row: 2;
  }

  /*Styling for homepage footer, without newsletter signup*/
  &.home {
    grid-column: 5 / 7;

    @media ${mediaQueries.uptoTablet} {
      /*TK I kind of think this should be centered... maybe?*/
      grid-column: 3 / 4;
    }
    @media ${mediaQueries.uptoMobile} {
      grid-column: 1 / 2;
    }
  }
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
  &:not(:last-child) {
    padding-bottom: calc(1.3rem / 4);
  }
`;

let NavLink = styled.a`
  color: inherit;
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
  grid-column: 3 / 6;
  display:flex;
  flex-direction:column;
  justify-content:space-between;

  @media ${mediaQueries.uptoTablet} {
    grid-column: 2 / 4;
  }
  @media ${mediaQueries.uptoMobile} {
    grid-row: 2;
  }

  /*Styling for homepage footer, without newsletter signup*/
  &.home {
    grid-column: 7 / 10;

    @media ${mediaQueries.uptoTablet} {
      grid-column: 4 / 7;
    }
    @media ${mediaQueries.uptoMobile} {
      grid-column: 2 / -1;
    }
  }
`;

let FooterNewsletterSignup = styled.div`
  grid-column: 6 / 12;
  /*display: grid;*/
  /*grid-template-columns: 6;*/

  @media ${mediaQueries.uptoTablet} {
    grid-column: 4 / -1;
    /*grid-template-columns: 3;*/
  }

  @media ${mediaQueries.uptoMobile} {
    grid-column: 1 / -1;
    /*grid-row: 1;*/
    /*grid-template-columns: 3;*/
  }
`;

let NewsLetterShoutOut = styled.p`
  padding-bottom: calc(1.3rem / 4);
`;

export default Footer;
