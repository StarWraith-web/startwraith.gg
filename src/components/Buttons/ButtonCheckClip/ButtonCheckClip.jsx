/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./ButtonCheckClip.scss";
import axios from "axios";
import { toast } from "react-toastify";

export function ButtonCheckClip(props) {
  const { clips, firstIndex, lastIndex } = props;
  const [_id, setIdClip] = useState("");
  const [check, setCheck] = useState(false);

  const handleView = async () => {
    await axios
      .patch("http://localhost:8000/api/clips/view-clip", {
        _id,
      })
      .then((resp) => {
        toast.success(resp.data.msg);
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };

  const handleOnChange = () => {
    setCheck(!check);
  };

  const items = clips
    .map((item, index) => {
      return (
        <div className="container-check-clip" key={item._id}>
          <input
            type="checkbox"
            id="checkbox-clip"
            onChange={() => {
              setIdClip(item._id);
              handleView();
              items.splice(index, 1)
            }}
          />
          <label htmlFor="checkbox-clip">
            <div id="tick_mark"></div>
          </label>
        </div>
      );
    })
    .slice(firstIndex, lastIndex);

  return items;
}
