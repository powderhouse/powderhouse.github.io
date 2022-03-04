import styled from "styled-components";
import { useRouter } from "next/router";

import Link from "next/link";

import { mediaQueries, navMenuItems } from "../site-data.js";

import { colorByProp, complementaryColor } from "../components/global.js";

import Scribble from "../components/Scribble.js";
import Logo from "../components/Logo.js";
import Region2 from "../components/Region2.js";

function getScribbleColor(navText) {
  return navMenuItems.find((el) => el.text == navText).color;
}

function Header(props) {
  const router = useRouter();
  let basePath = "/" + router.pathname.split("/")[1];

  return (
    <Region2 {...props}>
      <Wrapper>
        <LogoLockup>
          <Link href="/">
            <a>
              <>
                <Logo
                  direction="vertical"
                  logotype={true}
                  stroke={complementaryColor(props.backgroundColor)}
                  className="navlogo-mobile"
                  alt="Go to home page"
                />
                <Logo
                  direction="horizontal"
                  logotype={true}
                  stroke={complementaryColor(props.backgroundColor)}
                  className="navlogo-tabletAndUp"
                  alt="Go to home page"
                />
              </>
            </a>
          </Link>
        </LogoLockup>
        <NavMenu>
          <NavList>
            {navMenuItems.map(function (n, i) {
              return (
                <NavListItem key={n.href}>
                  <NavLink
                    className={
                      (basePath == n.href ? "active " : "") + "nav-link"
                    }
                    color={
                      props.color
                        ? props.color
                        : complementaryColor(props.backgroundColor)
                    }
                    href={n.href}
                  >
                    {n.text}
                  </NavLink>
                  <Scribble
                    number={(i % 3) + 1}
                    stroke={`var(${
                      basePath == n.href
                        ? props.activeScribbleColor
                          ? props.activeScribbleColor
                          : getScribbleColor(n.text)
                        : getScribbleColor(n.text)
                    })`}
                    strokeWidth="2"
                    active={basePath == n.href ? "active " : ""}
                  />
                </NavListItem>
              );
            })}
          </NavList>
        </NavMenu>
      </Wrapper>
    </Region2>
  );
}

let Wrapper = styled.header`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: var(--vertical-rhythm) 0;
  align-items: center;
  ${(props) => colorByProp(props)};
  color: inherit;
  stroke: inherit;
  fill: inherit;

  @media ${mediaQueries.uptoMobile} {
    flex-direction: column;
    height: fit-content;
  }
`;

let LogoLockup = styled.div`
  grid-column: 1 / span 3;
  width: 320px;
  line-height: 0; // To shrink the div to the height of the logo

  & .navlogo-mobile {
    /*By default, hide the mobile logo*/
    display: none;
  }

  @media ${mediaQueries.uptoTablet} {
    width: 200px;
  }

  @media ${mediaQueries.uptoMobile} {
    width: 100%;
    grid-column: 1 / -1;

    /*On mobile, swap which logo is visible*/
    & .navlogo-mobile {
      display: block;
    }

    & .navlogo-tabletAndUp {
      display: none;
    }
  }
`;

let NavMenu = styled.nav`
  position: relative;
  padding-bottom: 0.25em;

  @media ${mediaQueries.uptoLaptop} {
    grid-column: -4 / -1;
  }

  @media ${mediaQueries.uptoTablet} {
    // To line up nav and logotype optically
    font-size: var(--step-down-1);
    top: 2px;
  }

  @media ${mediaQueries.uptoMobile} {
    grid-row: 2;
    grid-column: 1 / -1;
    margin: auto;
    top: 0; // TODO: Fix media queries to apply to one device at a time.
  }
`;

let NavList = styled.ol`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  transform: translateY(3px);

  @media ${mediaQueries.uptoMobile} {
    padding-top: 1.35em;
    transform: translateY(
      0px
    ); // TODO: Fix media queries to apply to one device at a time.
    line-height: 1em;
  }
`;

let NavListItem = styled.li`
  position: relative;
  list-style-type: none;
  cursor: pointer;

  &:not(:last-child) {
    // TODO: Decide if this makes sense
    margin-right: var(--gap);
  }

  &:hover div {
    visibility: visible;
  }

  @media ${mediaQueries.uptoMobile} {
  }
`;

let NavLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Header;
