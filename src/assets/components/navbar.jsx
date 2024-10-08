import logo from '../../../public/logo2.svg'
import './css/navbar.css'

const NavBar = () => {

    return (
      <>
        <nav className="navbar">
          <div className="nav-header">
            <a href="/">
              <img
                src={logo}
                className="logo"
                alt="Vinicius Castello prefeito é treze"
              />
            </a>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a
                  href="https://drive.google.com/file/d/1HwrApCI70uARQ8bg_ArXMopP1JSjW14D/view"
                  target="_blank"
                >
                  Plano de governo
                </a>
              </li>
              <li>
                <a href="/midia">V♥C na mídia</a>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/viniciuscastelllo/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                    <li>
                        <a
                        href="https://open.spotify.com/show/74TYNJHOx2NBmcbT1zLBW0?si=RFkuynz_S3iO-e5d8gFO8A&utm_source=Link+da+Bio+do+RD+Station&utm_medium=social&utm_campaign=CTA+no+Link+da+Bio"
                        target="_blank"
                        >
                        Radio BORA MUDAR OLINDA
                        </a>
                    </li>
                </ul>
              </li>
              <li>
                <a href="/jingles">Jingles VC</a>
                <ul>
                  <li>
                    <a href="https://music.youtube.com/playlist?list=PLxGoDVJHS5xDUofXph0bquWhrNBUXLQ_2&si=MDQhqZ3rSh4dPTjv"
                        target="_blank">
                      Jingles VC no youtube music
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );

}

export default NavBar