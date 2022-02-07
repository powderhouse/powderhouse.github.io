import styled from "styled-components";
import { useRouter } from "next/router";

import { navMenuItems } from "../site-data.js";
import { gap, baseGrid } from "./global.js";
import { scribbleSVGs, logotypeHorizSVG } from "../site-data.js";
import { highlight, colorByProp, ShiftBy } from "../components/global.js";
import Region2 from "../components/Region2.js";

function Header(props) {
  const router = useRouter();
  function assignPageColor(navText) {
    let color;
    navMenuItems.forEach((el) =>
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
        <ShiftBy x={0} y={-5}>
          <LogoLockup>
            <div style={{ width: "321.54px" }}>
              <a href="/">{logotypeHorizSVG()}</a>
            </div>
          </LogoLockup>
        </ShiftBy>
        <NavMenu>
          <ShiftBy x={0} y={-3}>
            <NavList>
              {navMenuItems.map(function (n) {
                return (
                  <NavListItem key={n.href}>
                    <NavLink
                      className={
                        (router.pathname == n.href ? "active" : "") +
                        " nav-link"
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
  height: calc(6 * 1.3rem);
  align-items: center;
  ${(props) => colorByProp(props)}
  ${(props) => `
    color: inherit;
    stroke: inherit;
    fill: inherit;
    `};
  ${(props) => baseGrid};
`;

let LogoLockup = styled.div`
  grid-column: 1 / span 3;
`;

let NavMenu = styled.nav`
  grid-column: 9 / -1;
`;

let NavList = styled.ol`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

let NavListItem = styled.li`
  list-style-type: none;
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
`;

export default Header;