import "./ButtonPrimary.scss";

export function ButtonPrimary(props) {
  const { title, mail } = props;

  return (
    <div class="container-btn-primary">
      <a href={"mailto:"+mail} class="btn-glitch-fill">
        <span class="text">{title}</span>
        <span class="text-decoration">_</span>
        <span class="decoration">&rArr;</span>
      </a>
    </div>
  );
}
