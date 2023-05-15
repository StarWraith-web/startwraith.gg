import "./ButtonPrimary.scss";

export function ButtonPrimary(props) {
  const { title, mail } = props;

  return (
    <div className="container-btn-primary">
      <a href={"mailto:"+mail} className="btn-glitch-fill">
        <span className="text">{title}</span>
        <span className="text-decoration">_</span>
        <span className="decoration">&rArr;</span>
      </a>
    </div>
  );
}
