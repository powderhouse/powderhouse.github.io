function HomePage() {
  let navMenuItems = [
    'About',
    'Team',
    'Work',
    'News'
  ]

  return (
    <>
      <header>
        <div class='logo-and-logotype'>
          <div id='logo'></div>
          <div id='logotype'></div>
        </div>
        <nav>
          <ol>
            {navMenuItems.map(n => <li>{n}</li>)}
          </ol>
        </nav>
      </header>

      <div id='splash-language'>
        <p>
        We are a research, design, and advocacy groupdevoted to realizing the future of learning in practice through direct action with youth.
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


      <footer>
      <div id='footer-navigation'>
        <ol>
          {navMenuItems.map(n => {
            return <li><a href={n.toLowerCase()}>{n}</a></li>
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
    </>
  );
}

export default HomePage;
