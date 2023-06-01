import "./ButtonPrev.scss";

export function ButtonPrev(props) {
  const { prevHandler } = props;
  return <button className="play-btn-prev" onClick={prevHandler}></button>;
}
