import { navMenuItems } from "../site-data.js";
import { gap, baseGrid } from "./global.js";
import styled from "styled-components";
import { scribbleSVGs, logotypeHorizSVG } from "../site-data.js";

function Header(props) {
  function highlightCurrentPage() {
    // let currURL = window.location.href;
    // console.log(currURL);
    // document.querySelectorAll(".nav-link").forEach(el => {
    //   if (currURL == el.href) {
    //     console.log("current url is "+el);
        // el.style.backgroundColor = "red";
    //   }
    // })
  }
  highlightCurrentPage()

  return (
    <Wrapper bgColor={props.bgColor} css={baseGrid}>
      <LogoLockup>
        <a href="/">
          {logotypeHorizSVG(props.color)}  
        </a>
      </LogoLockup>
      <NavMenu>
        <NavList>
          {navMenuItems.map((n) => (
            <NavListItem key={n.href}>
              <NavLink className="nav-link" color={props.color} href={n.href}>
                <div>{n.text}</div>
                <Scribble className="nav-scribble">{scribbleSVGs[1]("yellow")}</Scribble>
              </NavLink>
            </NavListItem>
          ))}
        </NavList>
      </NavMenu>
    </Wrapper>
  );
}

let Wrapper = styled.header`
  grid-column: 1 / -1;

  background-color: var(--${(props) => props.bgColor});
  height: 102px; /*TK Explicit?*/
  align-items: center;
`;

let LogoLockup = styled.div`
  grid-column: 1 / span 3;
  margin-left:var(--gap);
`;

let NavMenu = styled.nav`
  grid-column: 9 / -1;
`;

let NavList = styled.ol`
  display: flex;
  justify-content: space-evenly;

  padding: 0;
`;

let NavListItem = styled.li`
  list-style-type: none;
`;

let NavLink = styled.a`
  text-decoration: none;
  color: var(--off-white);
  color: var(--${(props) => props.color});

  display:flex;
  flex-direction:column;
  align-items:center;
`;

let Scribble = styled.div`
  margin-top:-1rem;
`;

export default Header;
