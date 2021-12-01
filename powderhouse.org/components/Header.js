import { navMenuItems } from '../site-data.js';
import { gap, baseGrid } from './global.js';
import styled from 'styled-components';

function Header(props) {
  return (
    <Wrapper bgColor={props.bgColor} css={baseGrid}>
        <LogoLockup>
          <div id='logo'></div>
          <div id='logotype'></div>
        </LogoLockup>
        <NavMenu>
          <NavList>
            {navMenuItems.map(n => <NavListItem key={n.href}><NavLink color={props.color} href={n.href}>{n.text}</NavLink></NavListItem>)}
          </NavList>
        </NavMenu>
      </Wrapper>
      )
}

let Wrapper = styled.header`
  grid-column: 1 / -1;

  background-color:var(--${props => props.bgColor});
  height:102px; /*TK Explicit?*/
  align-items:center;
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
  color:var(--off-white);
  color:var(--${props => props.color});
`;

export default Header;