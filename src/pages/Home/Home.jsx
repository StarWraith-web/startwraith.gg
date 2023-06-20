/* eslint-disable no-unused-vars */
import {
  AboutMe,
  BrandCarousel,
  Footer,
  SocialSection,
  TopBar,
} from "../../components";
import videoCollab from "../../assets/video/colaboraciones.mp4";
import "./Home.scss";

export function Home() {
  return (
    <div className="container">
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
  );
}
