import React from "react";
import "./Button.scss";

function Button({ text, color, width, onClick, disabled, textColor }) {
  //available colors:  yellow, blue, light blue, pink

  return (
    <button
      className={disabled ? "Button_Main disabled_button" : "Button_Main"}
      style={{
        backgroundColor: color,
        width: width ? width : "fit-content",
        color: textColor,
      }}
      onClick={onClick}
      disabled={disabled}
      type={disabled ? "button" : "submit"}
    >
      {text}
    </button>
  );
}

export default Button;
