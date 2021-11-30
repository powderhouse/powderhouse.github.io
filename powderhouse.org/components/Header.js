import { navMenuItems } from '../site-data.js';
import { gap, baseGrid } from './global.js';
import styled from 'styled-components';

function Header(props) {
  return (
    <Wrapper css={baseGrid}>
        <LogoLockup>
          <div id='logo'></div>
          <div id='logotype'></div>
        </LogoLockup>
        <NavMenu>
          <NavList>
            {navMenuItems.map(n => <NavListItem key={n.href}><NavLink href={n.href}>{n.text}</NavLink></NavListItem>)}
          </NavList>
        </NavMenu>
      </Wrapper>
      )
}

let Wrapper = styled.header`
  grid-column: 1 / -1;

  background-color:var(--{props.bgColor});
`;

let LogoLockup = styled.div`
  grid-column: 1 / 3;
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
  color: var(--off-black);
`;

export default Header;