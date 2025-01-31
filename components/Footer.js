import styled from "styled-components";
import { useRouter } from "next/router";

import Icon from "../components/Icon.js";
import Logo from "../components/Logo.js";
import Region2 from "../components/Region2.js";
import NewsLetterSignUp from "../components/NewsLetterSignUp";
import { navMenuItems, socials, mediaQueries } from "../site-data.js";

import { baseGrid, colorByProp, ShiftBy } from "../components/global.js";

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
                    <li key={i}>
                      <NavLink href={n.href}>{n.text}</NavLink>
                    </li>
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
                  Somerville, MA <br />
                </NavLink>
              </ContactNavItem>
              <ContactNavItem className="www1">
                <NavLink href="mailto:us@powderhouse.org">
                  us@powder
                  <wbr />
                  house.org
                </NavLink>
              </ContactNavItem>
              <ContactNavItem className="www2">
                <NavLink href="tel:+16176041339">(617) 604-1339</NavLink>
              </ContactNavItem>
              {router.pathname == "/" ? (
                ""
              ) : (
                <ContactNavItem className="www2">
                  <NavLink href="/privacy">Privacy</NavLink>
                </ContactNavItem>
              )}
              <ContactNavItem className="www3">
                <SocialList className={router.pathname != "/" ? "" : "home"}>
                  {socials.map((n) => {
                    return (
                      <IconListItem
                        href={n.href}
                        key={n.id}
                        icon={n.service.toLowerCase()}
                      />
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
                  shoutOut="If you'd like to keep up with our work, join our
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
  padding-top: 2.75em;
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
    grid-column: -3 / -2;
    grid-row: 2;
  }
  @media ${mediaQueries.uptoMobile} {
    grid-column: 1 / 2;
    grid-row: 2;
    font-size: var(--small-font-size);
    line-height: var(--small-line-height);
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

let ContactNavList = styled(NavList)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.home {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "irl www1" "irl www2" "irl www3";
    column-gap: var(--gap);

    @media ${mediaQueries.uptoMobile} {
      grid-template-columns: 1fr;
      grid-template-areas:
        "irl"
        "www1"
        "www2"
        "www3";
    }
  }
  &.home .irl {
    // TODO: Rename to make class name more readable
    grid-area: irl;
    justify-content: flex-end;
    text-align: right;
    @media ${mediaQueries.uptoMobile} {
      justify-content: center;
      text-align: center;
      padding-bottom: calc(var(--base-line-height) / 2);
    }
  }

  &.home .www1 {
    // TODO: Rename to make class name more readable
    grid-area: www1;
    hyphens: manual;
    text-align: left;

    @media ${mediaQueries.uptoMobile} {
      text-align: center;
      justify-content: center;
    }
  }

  &.home .www2 {
    grid-area: www2;
    text-align: left;

    @media ${mediaQueries.uptoMobile} {
      justify-content: center;
      margin: auto;
    }
  }
  &.home .www3 {
    grid-area: www3;
    transform: translateY(-3px);

    @media ${mediaQueries.uptoMobile} {
      justify-content: center;
      margin: auto;
    }
  }
`;

let ContactNavItem = styled.li`
  &.www {
    flex-direction: column;
    align-items: flex-start;
  }
`;

let NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  // TODO: Search and make sure all line-heights set to base-line-height are accompanied by fonts
  line-height: var(--base-line-height);
`;

let SocialList = styled(NavList)`
  display: flex;

  & li:not(:last-child) {
    padding-right: 6px;
  }
  & li:not(:first-child) {
    padding-left: 6px;
  }

  @media ${mediaQueries.uptoTablet} {
    justify-content: flex-end;
  }

  /*Styling for homepage footer, without newsletter signup*/
  &.home {
    @media ${mediaQueries.uptoTablet} {
      justify-content: flex-start;
    }

    @media ${mediaQueries.uptoMobile} {
      justify-content: center;
    }
  }
`;

let FooterContact = styled.div`
  grid-column: 3 / 6;
  display: flex;
  justify-content: space-between;

  @media ${mediaQueries.uptoTablet} {
    grid-column: 2 / -3;
    grid-row: 2;

    justify-content: end;
    text-align: right;
  }
  @media ${mediaQueries.uptoMobile} {
    grid-column: 2 / -1;
    grid-row: 2;
    font-size: var(--small-font-size);
    line-height: var(--small-line-height);
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
  display: flex;
  row-gap: 0;
  flex-direction: column;
  justify-content: flex-start;

  @media ${mediaQueries.uptoTablet} {
    grid-column: 2 / -2;
    grid-row: 1;
  }

  @media ${mediaQueries.uptoMobile} {
    grid-column: 1 / -1;
  }
`;

export default Footer;
