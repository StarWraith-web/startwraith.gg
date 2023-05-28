import "./TextGlitchUnderlined.scss"

export function TextGlitchUnderlined(props) {
  const { text } = props;
  return (
    <div className="portfolio-experiment">
      <div className="experiment-title">
        {text}
      </div>
    </div>
  );
}
