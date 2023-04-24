import { ButtonGlitch } from "../Buttons";
import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Star Wraith</h1>

        <div className="contact">
          <h2 className="nav__title">Contacto</h2>

          <address>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <div className="button-wrapper-footer">
              <ButtonGlitch text="Contactame" />
            </div>
          </address>
        </div>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2>Title</h2>

          <ul className="nav__ul">
            <li>
              <a href="https://www.youtube.com/c/StarWraithYT">link</a>
            </li>

            <li>
              <a href="https://www.youtube.com/c/StarWraithYT">link</a>
            </li>

            <li>
              <a href="https://www.youtube.com/c/StarWraithYT">link</a>
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
