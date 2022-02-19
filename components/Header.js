import styled from "styled-components";
import { useRouter } from "next/router";

import Link from "next/link";

import { navMenuItems } from "../site-data.js";
import { gap, baseGrid } from "./global.js";
import {
  scribbleSVGs,
  logotypeHorizSVG,
  logotypeVertSVG,
  logoSVG,
  mediaQueries,
} from "../site-data.js";
import {
  highlight,
  colorByProp,
  ShiftBy,
  complementaryColor,
} from "../components/global.js";
import Region2 from "../components/Region2.js";

function Header(props) {
  const router = useRouter();
  let basePath = "/" + router.pathname.split("/")[1];

  function assignPageColor(navText) {
    let color;
    props.activeScribbleColor 
      ? (color = props.activeScribbleColor)
      : navMenuItems.forEach((el) =>
          el["text"] == navText ? (color = el["color"]) : ""
        );
    return color;
  }
  function assignScribbleNum(navText) {
    let scribbleNum;
    navMenuItems.forEach((el) =>
      el["text"] == navText ? (scribbleNum = el["scribbleNum"]) : ""
    );
    return scribbleNum;
  }

  return (
    <Region2 {...props}>
      <Wrapper>
        {/* <ShiftBy x={0} y={-10}> */}
        <LogoLockup>
          <a href="/">
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
        </LogoLockup>
        {/* </ShiftBy> */}
        <NavMenu>
          <ShiftBy x={0} y={-3}>
            <NavList>
              {navMenuItems.map(function (n) {
                return (
                  <NavListItem key={n.href}>
                    <NavLink
                      className={
                        (basePath == n.href ? "active " : "") + "nav-link"
                      }
                      color={props.color}
                      href={n.href}
                    >
                      <div>{n.text}</div>
                      <Scribble className="nav-scribble">
                        {scribbleSVGs[assignScribbleNum(n.text)](
                          assignPageColor(n.text)
                        )}
                      </Scribble>
                    </NavLink>
                  </NavListItem>
                );
              })}
            </NavList>
          </ShiftBy>
        </NavMenu>
      </Wrapper>
    </Region2>
  );
}

let Wrapper = styled.header`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gap);
  // TODO: Rationalize this
  height: calc(6 * var(--body-line-height));
  align-items: center;
  ${(props) => colorByProp(props)};
  ${(props) => `
    color: inherit;
    stroke: inherit;
    fill: inherit;
    `};
  ${(props) => baseGrid};

  @media ${mediaQueries.uptoMobile} {
    height: fit-content;
  }
`;

let LogoLockup = styled.div`
  grid-column: 1 / span 3;
  width: 321.54px;
  transform: translateY(-5px);

  & .navlogo-mobile {
    /*By default, hide the mobile logo*/
    display: none;
    transform: translateY(15px);
    flex-wrap: wrap;
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
  grid-column: -4 / -1;
  transform: translateY(10);

  @media ${mediaQueries.uptoMobile} {
    grid-row: 2;
    grid-column: 1 / -1;
    margin: auto;
  }
`;

let NavList = styled.ol`
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`;

let NavListItem = styled.li`
  list-style-type: none;
  padding-right: var(--gap);

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

let Scribble = styled.div`
  visibility: hidden;
  position: absolute;
  top: 9px;

  @media ${mediaQueries.uptoMobile} {
    top: 19px;
  }
`;

export default Header;
