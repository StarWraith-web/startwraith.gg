/* eslint-disable no-unused-vars */
import "./ButtonPrimary.scss";

import play from "../../../assets/img/icons/play.svg";

export function ButtonPrimary(props) {
  const { title, mail } = props;

  return (
    <div className="button-clips">
      <div className="button-wrapper-clips">
        <div className="button-clips">
          <img className="group-clips" alt="Group" src={play} />
          <div className="text-wrapper-clips">Clips</div>
        </div>
      </div>
    </div>
  );
}
