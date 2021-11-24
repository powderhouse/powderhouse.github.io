import styled, { createGlobalStyle } from 'styled-components';
import { navMenuItems } from '../site-data.js';

function Header() {
  return (
    <header>
        <div class='logo-and-logotype'>
          <div id='logo'></div>
          <div id='logotype'></div>
        </div>
        <nav>
          <ol>
            {navMenuItems.map(n => <li><a href={n.href}>{n.text}</a></li>)}
          </ol>
        </nav>
      </header>
      )
}

function Footer() {
  return (
    <footer>
      <div id='footer-navigation'>
        <ol>
          {navMenuItems.map(n => {
            return <li><a href={n.href}>{n.text}</a></li>
          })}
        </ol>
      </div>
      <div id='footer-contact'>
        <div class='address'>
          339R Summer Street <br/>
          Somerville, MA 02144
        </div>
        <div class='email'>
          us@powderhouse.org
        </div>
        <ul class='socials'>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
          <li>Facebook</li>
        </ul>
      </div>
      </footer>
  )
}

function HomePage() {

  return (
    <>
      <Header />

      <div id='splash-language'>
        <p>
        We are a <span>research, design, and advocacy group</span> devoted to realizing the <span>future of learning</span> in practice through <span>direct action with youth</span>.
        </p>
        <p>
        Our work aims to demonstrate the very best our community—along with the public sector—could provide young people, right now, with enough imagination.
        </p>
      </div>

      <div id='splash-newsletter-signup'>
      <form action='' method='get'>
          <input type='email' name='email' id='email' required />
          <input type="submit" value="Sign Up" />
      </form>
      </div>


      <Footer/>
      
    </>
  );
}

export default HomePage;
