import styled from "styled-components";
import { useRouter } from "next/router";

import Link from "next/link";

import {
  logotypeHorizSVG,
  logotypeVertSVG,
  logoSVG,
  mediaQueries,
  navMenuItems,
} from "../site-data.js";

import {
  gap,
  baseGrid,
  highlight,
  colorByProp,
  ShiftBy,
  complementaryColor,
} from "../components/global.js";

import Scribble from "../components/Scribble.js";
import Region2 from "../components/Region2.js";

function getScribbleNum(navText) {
  return navMenuItems.find((el) => el.text == navText).scribbleNum;
}

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
                {logotypeVertSVG(
                  `${complementaryColor(props.backgroundColor)} navlogo-mobile`
                )}
                {logotypeHorizSVG(
                  `${complementaryColor(
                    props.backgroundColor
                  )} navlogo-tabletAndUp`
                )}
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
                    color={props.color}
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
  // TODO: Rationalize this
  // height: calc(6 * var(--body-line-height));
  padding: 35px 0;
  align-items: center;
  ${(props) => colorByProp(props)};
  ${(props) => `
    color: inherit;
    stroke: inherit;
    fill: inherit;
    `};

  @media ${mediaQueries.uptoMobile} {
    flex-direction: column;
    height: fit-content;
    padding-bottom: calc(var(--body-line-height) / 2);
  }
`;

let LogoLockup = styled.div`
  grid-column: 1 / span 3;
  width: 320px;
  line-height: 0; // To shrink the div to the height of the logo
  // transform: translateY(-5px);

  & .navlogo-mobile {
    /*By default, hide the mobile logo*/
    // TODO: If we're hiding, do we need any of this?
    display: none;
    // transform: translateY(15px);
    // flex-wrap: wrap;
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
  grid-column: -5 / -1;
  padding-top: calc(var(--body-line-height) / 2);

  @media ${mediaQueries.uptoLaptop} {
    grid-column: -4 / -1;
  }

  @media ${mediaQueries.uptoMobile} {
    grid-row: 2;
    grid-column: 1 / -1;
    margin: auto;
    // padding-top:0;
  }
`;

let NavList = styled.ol`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  transform: translateY(3px);
`;

let NavListItem = styled.li`
  position: relative;
  list-style-type: none;

  &:not(:last-child) {
    // TODO: Decide if this makes sense
    margin-right: var(--gap);
  }

  &:hover div {
    visibility: visible;
  }

  @media ${mediaQueries.uptoMobile} {
    padding-top: calc(var(--gap) / 2);
    padding-bottom: calc(var(--gap) / 2);
  }
`;

let NavLink = styled.a`
  text-decoration: none;
  color: var(--off-white);
  color: var(--${(props) => props.color});

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Header;
