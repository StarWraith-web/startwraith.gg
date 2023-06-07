import "./AboutMe.scss";
import ImgAbout from "../../assets/img/img-home.jpg";

export function AboutMe() {
  return (
    <div>
      <div className="about-wrapper">
        <div className="about-left">
          <div className="about-left-content">
            <div>
              <div className="shadow">
                <div className="about-img">
                  <img src={ImgAbout} alt="about img" />
                </div>
              </div>

              <h2>Rodolfo Martín - StarWraith</h2>
            </div>
          </div>
        </div>

        <div className="about-right">
          <h1>
            StarWraith<span>!</span>
          </h1>
          <h2>Creador de Contenido & Ex Jugador Profesional de Shooters</h2>

          <div className="about-para">
            <p>
              Creador de contenido para <b>Case</b> y ex creador de contenido de{" "}
              <b>Team Heretics</b>. Me inicié en el mundo competitivo en el
              Counter-Strike: Source, allá por el 2003, y desde entonces no dejé
              de intentar competir. He jugado en las mejores ligas nacionales
              del CS:S y el CS:GO, también compitiendo a nivel mundial en Apex
              Legends, llegando a las grandes finales.
            </p>
            <p>
              Fuera de la competición también destaco mi pasada por Riot Games,
              donde trabajé 6 años para la empresa creadora del League of
              Legends, desde el 2011 hasta el 2017 Lo que hacía en ella lo
              puedes encontrar{" "}
              <a
                className="link"
                href="https://www.twitch.tv/videos/744645310"
                target="_blank"
                rel="noopener noreferrer"
              >
                aquí
              </a>
              .
            </p>
            <p>
              Hoy día me dedico al Valorant como creador de contenido, pero al
              principio también competí bajo el escudo de Giants Gaming. Ahora
              solamente juego rankeds con un tono humorístico, sarcástico y a
              veces didáctico. Para mi lo más importante es que las personas
              encuentren diversión y un espacio donde ser uno mismo, por eso en
              mi contenido también hay lugar para la psicoeducación gracias a
              una especialista que lleva dedicándose a la psicología toda su
              vida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
