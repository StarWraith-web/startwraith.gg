import React from "react";
import { SocialSection, TopBar } from "../../components";

import "./Home.scss";

export function Home() {
  return (
    <div className="container">
      <div className="top-bar-container">
        <TopBar />
      </div>
      <div className="content">
        <div className="bottom-section">
          <div className="social-section">
            <SocialSection />
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </div>
  );
}
