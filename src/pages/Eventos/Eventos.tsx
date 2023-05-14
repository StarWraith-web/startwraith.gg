import React from "react";
import "./Eventos.scss";
import { ComingSoon, Footer, SocialSection, TopBar } from "../../components";

export function Eventos() {
  return (
    <div className="container">
      <div className="top-bar-container">
        <TopBar />
      </div>
      <div className="main-content">
        <div style={{ padding: "50px" }} className="center-center">
          <ComingSoon day="30" month="6" />
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
