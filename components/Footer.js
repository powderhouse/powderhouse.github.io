import styled from "styled-components";
import { useRouter } from "next/router";

import Icon from "../components/Icon.js";
import Logo from "../components/Logo.js";
import Region2 from "../components/Region2.js";
import NewsLetterSignUp from "../components/NewsLetterSignUp";
import { navMenuItems, socials, mediaQueries } from "../site-data.js";

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
          {router.pathname != "/" ? (
            <FooterNavigation className={router.pathname != "/" ? "" : "home"}>
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
          ) : (
            ""
          )}
          <FooterContact className={router.pathname != "/" ? "" : "home"}>
            <ContactNavList className={router.pathname != "/" ? "" : "home"}>
              <ContactNavItem className="irl">
                <NavLink href="https://goo.gl/maps/2BFLEfCzk8ML1YoH8">
                  339R Summer Street <br />
                  Somerville, MA 02144
                </NavLink>
              </ContactNavItem>
              <ContactNavItem className="www1">
                <NavLink href="mailto:us@powderhouse.org">
                  us@powder<wbr/>house.org
                </NavLink>
              </ContactNavItem>
              <ContactNavItem className="www2">
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
            </ContactNavList>
          </FooterContact>
          {router.pathname != "/" ? (
            <>
              <FooterNewsletterSignup backgroundColor={backgroundColor}>
                <NewsLetterSignUp
                  color="off-black"
                  text="Follow us!"
                  buttonWidth="long"
                  buttonThickness="thick"
                  buttonTextLength="longText"
                  shoutOut="If you'd like to keep up with our work, sign up for our
                  mailing list."
                  backgroundColor={backgroundColor}
                />
              </FooterNewsletterSignup>
              <Logo
                direction="vertical"
                logotype={true}
                $color={`var(${accentColor})`} // TODO: Make color syntax consistent
                style={{ gridColumn: "1 / -1" }}
              />
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
      <ShiftBy x={0} y={3}>
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
  padding-top: calc(2 * var(--base-line-height));
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
    grid-row-start: 3;
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

let ContactNavList = styled(NavList)`
  display:flex;
  flex-direction:column;
  justify-content:space-between;

  &.home {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "irl www1" "irl www2";
    column-gap: var(--gap);

    @media ${mediaQueries.uptoMobile} {
      grid-template-columns: 1fr;
      grid-template-areas:
        "irl"
        "www1"
        "www2";
    }
  }
  &.home .irl {
    grid-area: irl;
    justify-content: flex-end;
    text-align:right;
    @media ${mediaQueries.uptoMobile} {
      justify-content: center;
      text-align: center;
      padding-bottom: calc(var(--base-line-height) / 2)
    }
  }

  &.home .www1 {
    grid-area: www1;
    hyphens: manual;

    @media ${mediaQueries.uptoMobile} {
      justify-content: center;
      padding-bottom: calc(var(--base-line-height) / 4)
    }
  }

  &.home .www2 {
    grid-area: www2;
    width:50%;

    @media ${mediaQueries.uptoMobile} {
      justify-content: center;
      margin:auto;
    }
  }
`;

let ContactNavItem = styled(NavItem)`
  &.www {
    flex-direction: column;
    align-items: flex-start;
  }
  &:not(:last-child) {
    // TODO: Rationalize this
    // padding-bottom: calc(var(--base-line-height) / 4);
  }
`;

let NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  line-height: var(--base-line-height);
`;

let SocialList = styled(NavList)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%; // TODO: Not on horizontal grid, but better looking?

  & li:not(:last-child) {
    padding-right:6px;
  }
  & li:not(:first-child) {
    padding-left:6px;
  }
`;

let FooterContact = styled.div`
  grid-column: 3 / 6;
  display: flex;
  justify-content:space-between;

  @media ${mediaQueries.uptoTablet} {
    grid-column: 2 / 4;
  }
  @media ${mediaQueries.uptoMobile} {
    grid-row: 2;
  }

  /*Styling for homepage footer, without newsletter signup*/
  &.home {
    grid-column: 4 / 10;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: var(--gap);

    @media ${mediaQueries.uptoTablet} {
      grid-column: 1 / -1;
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

export default Footer;
