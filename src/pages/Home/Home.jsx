/* eslint-disable no-unused-vars */
import {
  AboutMe,
  BrandCarousel,
  ButtonPrimary,
  Footer,
  Social,
  SocialSection,
  TopBar,
} from "../../components";
import { Link } from "react-router-dom";
import videoCollab from "../../assets/video/colaboraciones.mp4";
import bg1 from "../../assets/img/bg-1.png";
import bg2 from "../../assets/img/bg-2.png";
import bg3 from "../../assets/img/bg-3.png";
import playIcon from "../../assets/img/png/play.png";
import discord from "../../assets/img/icons/discord.svg";
import instagram from "../../assets/img/icons/instagram.png";
import tiktok from "../../assets/img/icons/tiktok.svg";
import twitch from "../../assets/img/icons/twitch.svg";
import twitter from "../../assets/img/icons/twitter.svg";
import youtube from "../../assets/img/icons/youtube.svg";
import "./Home.scss";

export function Home() {
  return (
    <div className="home">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle-top" />
          <img className="background-top" alt="background top" src={bg2} />
          <img className="image" alt="bg-3" src={bg3} />
          <img
            className="background-bottom"
            alt="background bottom"
            src={bg1}
          />
          <div className="rectangle-middle" />
          <div className="rectangle-bottom" />
          <h1 className="text-name">Rodolfo Martín - StarWraith</h1>
          <p className="subtitle">
            CREADOR DE CONTENIDO &amp; EX JUGADOR PROFESIONAL DE SHOOTERS
          </p>
          <div className="starwraith">STARWRAITH</div>
          <p className="description">
            <span className="span">
              Creador de contenido de Case y ex creador de contenido de Team
              Heretics. Me inicié en el mundo competitivo en el Counter-Strike:
              Source, allá por el 2003, y desde entonces no dejé de intentar
              competir. He jugado en las mejores ligas nacionales del CS:S y el
              CS:GO, también compitiendo a nivel mundial en Apex Legends,
              llegando a las grandes finales.
              <br />
              <br />
              Fuera de la competición también destaco mi pasada por Riot Games,
              donde trabajé 6 años para la empresa creadora del League of
              Legends, desde el 2011 hasta el 2017 Lo que hacía en ella lo
              puedes encontrar{" "}
            </span>
            <a
              href="https://www.twitch.tv/videos/744645310"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-wrapper-2">aquí</span>
            </a>
            <span className="span">
              .<br />
              <br />
              Hoy día me dedico al Valorant como creador de contenido, pero al
              principio también competí bajo el escudo de Giants Gaming. Ahora
              solamente juego rankeds con un tono humorístico, sarcástico y a
              veces didáctico. Para mi lo más importante es que las personas
              encuentren diversión y un espacio donde ser uno mismo, por eso en
              mi contenido también hay lugar para la psicoeducación gracias a
              una especialista que lleva dedicándose a la psicología toda su
              vida.
            </span>
          </p>
          <div className="container-video">
            <video autoPlay muted loop>
              <source src={videoCollab} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <img
            className="line-stroke"
            alt="Line stroke"
            src="https://generation-sessions.s3.amazonaws.com/aaa12554f2d4a58ccc3642ee9d21c6f5/img/line--stroke-.svg"
          />

          {/* SOCIAL SECTION */}
          <div>
            <img className="pointer bxl-twitch" alt="twitch" src={twitch} />
            <img className="pointer bxl-tiktok" alt="tiktok" src={tiktok} />
            <img className="pointer bxl-instagram" alt="instagram" src={instagram} />
            <img className="pointer bxl-twitter" alt="twitter" src={twitter} />
            <img className="pointer bxl-youtube" alt="youtube" src={youtube} />
            <img className="pointer bxl-discord" alt="Vector" src={discord} />
          </div>

          <div className="CTA">
            <button className="pointer button">
              <img className="group" alt="group" src={playIcon} />
              <div className="text-wrapper-5">Clips</div>
            </button>
            <button className="pointer div-wrapper">
              <div className="text-wrapper-5">Contacto</div>
            </button>
          </div>
          <div className="container-brands">
            <BrandCarousel />
          </div>

          <div className="text-wrapper-6">Home</div>
          <div className="text-wrapper-7">Tiers</div>
          <div className="text-wrapper-8">Clips</div>
          <div className="text-wrapper-9">Liderboard</div>

          {/* FOOTER */}
          <div>
            <p className="p">© 2023 starwraith.gg. All rights reserved.</p>
            <div className="text-wrapper-3">
              <Link to="/cookies">Cookies</Link>
            </div>
            <div className="text-wrapper-4">
              <Link to="/politica-privacidad">Política de Privacidad</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  /* return (
    <div className="home-layout">
      <div className="home-layout__first">

      </div>
      <div className="home-layout__second">
        
      </div>
      <div className="top-bar-container">
        <TopBar />
      </div>
      <div className="main-content">
        <AboutMe />
        <BrandCarousel />
        <div className="video-home">
          <div className="box-border box">
            <div className="container-video">
              <video autoPlay muted loop>
                <source src={videoCollab} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </div>
  ); */
}
