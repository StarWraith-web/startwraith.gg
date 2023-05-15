import {
  AboutMe,
  BrandCarousel,
  Footer,
  SocialSection,
  TopBar,
  ButtonPlayPause
} from "../../components";


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
        <YoutubeColab />
      </div>
      <div className="bottom-section">
        <div className="social-section">
          <SocialSection />
        </div>
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </div>
  );
}

function YoutubeColab() {
  return (
    <>
      <ButtonPlayPause/>
    </>
  );
}
