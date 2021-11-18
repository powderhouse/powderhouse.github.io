import { navMenuItems } from '../site-data.js';
import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
      <div id='footer-navigation'>
        <ol>
          {navMenuItems.map(n => {
            return <li key={n.href}><a href={n.href}>{n.text}</a></li>
          })}
        </ol>
      </div>
      <div id='footer-contact'>
        <div>
          339R Summer Street <br/>
          Somerville, MA 02144
        </div>
        <div>
          us@powderhouse.org
        </div>
        <ul>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
          <li>Facebook</li>
        </ul>
      </div>
      </Wrapper>
  )
}

let Wrapper = styled.footer`
background: blue;
`

export default Footer;