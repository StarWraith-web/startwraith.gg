import { ButtonGlitch } from "../Buttons";
import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Star Wraith</h1>

        <div className="contact">
          <address>
            <div className="button-wrapper-footer">
              <a href="mailto:rjbm90@gmail.com" >
                <ButtonGlitch text="Contactame" type="button"/>
              </a>            
            </div>
          </address>
        </div>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Merchan</h2>

          <ul className="nav__ul">
            <li>
              <a
                href="https://www.amazon.es/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=starwraith-21&linkId=788ac17b4767d5f2f21634fe5f196431&language=es_ES"
                target="_blank"
                rel="noopener noreferrer"
              >Amazon Afiliados</a>
            </li>

            <li>
              <a href="https://teamheretics.com/21-store" rel="noopener noreferrer">Teamheretics Store</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>

          <ul className="nav__ul">
            <li>
              <a href="https://www.youtube.com/c/StarWraithYT">
                Política de Privacidad
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/c/StarWraithYT">
                Términos de uso
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/c/StarWraithYT">Cookies</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>&copy; 2023 starwraith.gg. All rights reserved.</p>
      </div>
    </footer>
  );
}
