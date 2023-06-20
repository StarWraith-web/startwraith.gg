import { Link } from "react-router-dom";
import { ButtonGlitch } from "../Buttons";
import "./Footer.scss";
import { SocialSection } from "../SocialSection";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <div className="contact">
          <address>
            <div className="button-wrapper-footer">
              <a href="mailto:rjbm90@gmail.com">
                <ButtonGlitch text="Contacto" type="button" />
              </a>
            </div>
          </address>
        </div>
      </div>

      <ul className="footer__nav">
        <div className="nav__item">
          <div className="nav__ul">
            <SocialSection />
          </div>
        </div>

        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>

          <ul className="nav__ul">
            <li>
              <Link to="/politica-privacidad">Política de Privacidad</Link>
            </li>
            <li>
              <Link to="/cookies">Cookies</Link>
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
