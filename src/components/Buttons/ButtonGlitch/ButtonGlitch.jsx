import React from "react";
import "./ButtonGlitch.scss";

export function ButtonGlitch(props) {
  const { text, type, method } = props;

  return (
    <button className="glitch-button" type={type} onClick={method}>
      {text}
    </button>
  );
}
