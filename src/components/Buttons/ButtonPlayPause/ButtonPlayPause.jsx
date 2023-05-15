import "./ButtonPlayPause.scss";

export function ButtonPlayPause() {
  return (
    <div className="container-button-play">
      <label>
        <input type="checkbox" className="play-btn" />
        <div className="play-icon"></div>
        <div className="pause-icon"></div>
      </label>
    </div>
  );
}
