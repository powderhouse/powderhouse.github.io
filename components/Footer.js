import styled from "styled-components";
import { useRouter } from "next/router";

import Icon from "../components/Icon.js";
import Region2 from "../components/Region2.js";
import NewsLetterSignUp from "../components/NewsLetterSignUp";
import {
  navMenuItems,
  socials,
  logotypeVertSVG,
  mediaQueries,
} from "../site-data.js";

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
            ) : ""}
          <FooterContact className={router.pathname != "/" ? "" : "home"}>
            <ContactNavList className={router.pathname != "/" ? "" : "home"}>
              <ContactNavItem className="irl">
                <NavLink href="https://goo.gl/maps/2BFLEfCzk8ML1YoH8">
                  339R Summer Street <br />
                  Somerville, MA 02144 <br />
                  <br />
                </NavLink>
              </ContactNavItem>
              <ContactNavItem className="www">
                <NavLink href="mailto:us@powderhouse.org">
                  us@powderhouse.org
                </NavLink>
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
                />
              </FooterNewsletterSignup>
              <LogoContainer>{logotypeVertSVG(accentColor)}</LogoContainer>
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
  padding-top: calc(4 * var(--body-line-height));
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
  &.home {
    grid-column: 1 / -1;
    display:grid;
    grid-template-areas:"irl www";
    column-gap:var(--gap);

    @media ${mediaQueries.uptoMobile} {
      grid-template-areas:
        "irl" 
        "www";
    }
  }
  &.home .irl {
    grid-area:irl;
    justify-content: flex-end;
    text-align: end;
    @media ${mediaQueries.uptoMobile} {
      justify-content: center;
      text-align: center;
    }
  }

  &.home .www {
    grid-area:www;
    @media ${mediaQueries.uptoMobile} {
      align-items: center;
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
    // padding-bottom: calc(var(--body-line-height) / 4);
  }
`;

let NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  line-height: var(--body-line-height);
`;

let SocialList = styled(NavList)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%; // TODO: Not on horizontal grid, but better looking?

  @media ${mediaQueries.uptoMobile} {
    justify-content:center;

    & li {
      padding:10px;
    }
  }
`;

let FooterContact = styled.div`
  grid-column: 3 / 6;

  @media ${mediaQueries.uptoTablet} {
    grid-column: 2 / 4;
  }
  @media ${mediaQueries.uptoMobile} {
    grid-row: 2;
  }

  /*Styling for homepage footer, without newsletter signup*/
  &.home {
    grid-column: 4 / 10;
    display:grid;
    grid-template-columns:repeat(6, 1fr);
    column-gap:var(--gap);

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
