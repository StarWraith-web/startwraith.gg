import "./ButtonCheckClip.scss";

export function ButtonCheckClip() {
  return (
    <div className="container-check-clip">
      <input type="checkbox" id="checkbox-clip" />
      <label htmlFor="checkbox-clip">
        <div id="tick_mark"></div>
      </label>
    </div>
  );
}
