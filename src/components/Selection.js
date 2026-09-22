import React, { useState } from "react";
import "../styles/Child.css";

export default function Selection({ applyColor }) {
  const [style, setStyle] = useState({ background: "" });

  const handleClick = () => {
    applyColor(setStyle);
  };

  return (
    <div
      className="fix-box"
      style={{
        background: style.background,
        borderStyle: "solid",
        borderWidth: "3px",
        borderRadius: "10px",
        color: "white",
        fontSize: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={handleClick}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
