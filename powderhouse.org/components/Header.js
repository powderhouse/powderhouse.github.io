import { navMenuItems } from '../site-data.js';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
        <div>
          <div id='logo'></div>
          <div id='logotype'></div>
        </div>
        <nav>
          <ol>
            {navMenuItems.map(n => <li><a href={n.href}>{n.text}</a></li>)}
          </ol>
        </nav>
      </Wrapper>
      )
}

let Wrapper = styled.header`
background: red;
`

export default Header;