import { ButtonPrimary } from "../Buttons";
import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Star Wraith</h1>

        <div className="contact">
          <h2 className="nav__title">Contact</h2>

          <address>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <ButtonPrimary title="Contactame" mail="rjbm90@gmail.com" />
          </address>
        </div>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2>Title</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">link</a>
            </li>

            <li>
              <a href="#">link</a>
            </li>

            <li>
              <a href="#">link</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Política de Privacidad</a>
            </li>

            <li>
              <a href="#">Términos de uso</a>
            </li>

            <li>
              <a href="#">Cookies</a>
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
