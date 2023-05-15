import React from "react";
import "./ButtonGlitch.scss";

export function ButtonGlitch(props) {
  const { text } = props;

  return (
    <button className="glitch-button">{text}</button>
  );
}
