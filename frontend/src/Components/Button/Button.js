import React from "react";
import "./Button.scss";

function Button({ text, color, width, onClick, disabled, textColor,children,type }) {
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
      {children}
    </button>
  );
}

export default Button;