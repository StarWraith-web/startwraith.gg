import { Footer, TopBar } from "../../components";
import "./PrivacyPolicy.scss";

export function PrivacyPolicy() {
  return (
    <div className="container">
      <div className="top-bar-container">
        <TopBar />
      </div>
      <div className="main-content"></div>
      <div className="bottom-section">
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </div>
  );
}
