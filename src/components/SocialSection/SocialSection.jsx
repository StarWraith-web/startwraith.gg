import React from "react";
import "./SocialSection.scss";

export function SocialSection() {
  return (
    <div className="flex-center">
      <a
        href="https://twitter.com/StarWraith"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-twitter fa-4x icon-3d"></i>
      </a>
      <a href="https://www.youtube.com/c/StarWraithYT" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-youtube fa-4x icon-3d"></i>
      </a>
      <a href="https://www.instagram.com/iamstarwraith/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-instagram fa-4x icon-3d"></i>
      </a>
      <a href="https://www.twitch.tv/starwraith" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitch fa-4x icon-3d"></i>
      </a>
      <a href="https://www.tiktok.com/@iamstarwraith" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-tiktok fa-4x icon-3d"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-discord fa-4x icon-3d"></i>
      </a>
    </div>
  );
}
