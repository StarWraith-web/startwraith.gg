import "./Social.scss";

import discord from "../../assets/img/icons/discord.svg";
import instagram from "../../assets/img/icons/instagram.png";
import tiktok from "../../assets/img/icons/tiktok.svg";
import twitch from "../../assets/img/icons/twitch.svg";
import twitter from "../../assets/img/icons/twitter.svg";
import youtube from "../../assets/img/icons/youtube.svg";

export function Social() {
  return (
    <div className="social-section">
      <img className="bxl-twitch" alt="twitch" src={discord} />
      <img className="bxl-tiktok" alt="tiktok" src={tiktok} />
      <img className="bxl-instagram" alt="instagram" src={instagram} />
      <img className="bxl-twitter" alt="twitter" src={twitter} />
      <img className="bxl-twitch" alt="twitch" src={twitch} />
      <img className="bxl-youtube" alt="youtube" src={youtube} />
    </div>
  );
}
