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

function getPageColor(navText) {
  return navMenuItems.find((el) => el.text == navText).color;
}
function getScribbleNum(navText) {
  return navMenuItems.find((el) => el.text == navText).scribbleNum;
}

function Header(props) {
  const router = useRouter();
  let basePath = "/" + router.pathname.split("/")[1];

  return (
    <Region2 {...props}>
      <Wrapper>
        {/* <ShiftBy x={0} y={-10}> */}
        <Link href="/">
          <a>
            <LogoLockup>
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
            </LogoLockup>
          </a>
        </Link>
        {/* </ShiftBy> */}
        <NavMenu>
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
                    {n.text}
                  </NavLink>
                  <Scribble
                    number={getScribbleNum(n.text)}
                    stroke={`var(${getPageColor(n.text)})`}
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
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gap);
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
  ${(props) => baseGrid};

  @media ${mediaQueries.uptoMobile} {
    height: fit-content;
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
  grid-column: -4 / -1;

  @media ${mediaQueries.uptoMobile} {
    grid-row: 2;
    grid-column: 1 / -1;
    margin: auto;
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
  list-style-type: none;
  &:not(:last-child) {
    // TODO: Decide if this makes sense
    padding-right: var(--gap);
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

// let Scribble = styled.div`
//   // visibility: hidden;
//   width: 100%;
//   // position: absolute;
//   // top: 9px;

//   display: inline-block;
//   position: relative;
//   width: 100%;
//   padding-bottom: 100%;
//   vertical-align: middle;
//   overflow: hidden;

//   svg {
//     display: inline-block;
//     position: absolute;
//     top: 0;
//     left: 0;
//   }

//   @media ${mediaQueries.uptoMobile} {
//     // top: 19px;
//   }
// `;

export default Header;
