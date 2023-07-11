/* eslint-disable no-unused-vars */
import "./AboutMe.scss";
import ImgAbout from "../../assets/img/img-home.jpg";

export function AboutMe() {
  return (
    <div className="container-about-me">
      <div className="label">
        <div className="name-wrapper">
          <h1 className="text-wrapper">Rodolfo Martín - StarWraith</h1>
        </div>

        <div className="sub-title-wraper">
          <h1 className="sub-title">
            CREADOR DE CONTENIDO &amp; EX JUGADOR PROFESIONAL DE SHOOTERS
          </h1>
        </div>

        <div className="description-wrapper">
          <p className="description">
            <span className="text-wrapper-description">
              Ex creador de contenido de Team Heretics. Me inicié en el mundo
              competitivo en el Counter-Strike: Source, allá por el 2003, y
              desde entonces no dejé de intentar competir. He jugado en las
              mejores ligas nacionales del CS:S y el CS:GO, también compitiendo
              a nivel mundial en Apex Legends, llegando a las grandes finales.
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
              <span className="span">aquí</span>
            </a>
            <span className="text-wrapper-description">
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
        </div>
      </div>
    </div>
  );
}
