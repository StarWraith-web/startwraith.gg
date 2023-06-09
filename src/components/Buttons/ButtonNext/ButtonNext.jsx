import "./ButtonNext.scss";

export function ButtonNext(props) {
  const { nextHandler, currentPage, pageNumbers } = props;
  return (
    <button
      className={`play-btn-next ${
        currentPage >= pageNumbers ? "is-disabled" : ""
      }`}
      disabled={currentPage >= pageNumbers}
      onClick={nextHandler}
    ></button>
  );
}
