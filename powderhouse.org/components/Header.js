import { navMenuItems } from '../site-data.js';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
        <LogoLockup>
          <div id='logo'></div>
          <div id='logotype'></div>
        </LogoLockup>
        <NavMenu>
          <NavList>
            {navMenuItems.map(n => <NavListItem key={n.href}><a href={n.href}>{n.text}</a></NavListItem>)}
          </NavList>
        </NavMenu>
      </Wrapper>
      )
}

let Wrapper = styled.header`
  grid-column: 1 / -1;
  
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;

  background: red;
`

let LogoLockup = styled.div`
  grid-column: 1 / 3;

  background: pink;
`

let NavMenu = styled.nav`
  grid-column: 9 / -1;

  background: yellow;
`

let NavList = styled.ol`
  display: flex;
  justify-content: space-evenly;

  padding: 0;
`
let NavListItem = styled.li`
  list-style-type: none;
`

export default Header;