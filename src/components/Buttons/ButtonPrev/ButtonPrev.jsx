import "./ButtonPrev.scss";

export function ButtonPrev(props) {
  const { prevHandler, currentPage } = props;
  return <button className="play-btn-prev" disabled={currentPage === 1} onClick={prevHandler}></button>;
}
