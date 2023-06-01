import "./ButtonNext.scss";

export function ButtonNext(props) {
  const { nextHandler } = props;
  return <button className="play-btn-next" onClick={nextHandler}></button>;
}
