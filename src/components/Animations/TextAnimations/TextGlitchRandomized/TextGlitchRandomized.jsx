import "./TextGlitchRandomized.scss";

export function TextGlitchRandomized(props) {
  const { text } = props;
  return (
    <h1 class="glitch-randomized" data-text={text}>
      {text}
    </h1>
  );
}
