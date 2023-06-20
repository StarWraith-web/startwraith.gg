import "./SocialSection.scss";

export function SocialSection() {
  return (
    <div className="flex-center">
      <a
        href="https://twitter.com/StarWraith"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-twitter fa-2x icon-3d"></i>
      </a>
      <a href="https://www.youtube.com/c/StarWraithYT" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-youtube fa-2x icon-3d"></i>
      </a>
      <a href="https://www.instagram.com/iamstarwraith/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-instagram fa-2x icon-3d"></i>
      </a>
      <a href="https://www.twitch.tv/starwraith" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitch fa-2x icon-3d"></i>
      </a>
      <a href="https://www.tiktok.com/@iamstarwraith" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-tiktok fa-2x icon-3d"></i>
      </a>
      <a href="https://discord.com/invite/wuNDqRVn" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-discord fa-2x icon-3d"></i>
      </a>
    </div>
  );
}
