import React, { useEffect, useRef, useState } from "react";
import "./Checkbox.scss";

//images import
import check from "../../Assets/Images/check.webp";

function Checkbox({
  label,
  setSelected,
  selected,
  click,
  onClick,
  disabled,
  style,
}) {
  //label to add a label to the checkbox
  //set selected to set the usestate from the other page to true or false

  const CheckBoxRef = useRef();
  const clickedBox = useRef();

  useEffect(() => {
    if (selected) {
      clickedBox.current.classList.add("Checkbox_New_Clicked");
      CheckBoxRef.current.checked = true;
    } else {
      CheckBoxRef.current.checked = false;
      clickedBox.current.classList.remove("Checkbox_New_Clicked");
    }
  }, [selected]);

  return (
    <span style={style}>
      <div
        className="Checkbox_New_Wrapper"
        style={{ cursor: disabled ? "unset" : "pointer" }}
        onClick={() => {
          !disabled && (!click ? setSelected(!selected) : onClick());
        }}
      >
        <div className="Checkbox_New" ref={clickedBox}>
          {selected && <img src={check} alt="check" />}
        </div>
        <div className="Checkbox_Label">{label}</div>
      </div>
      <input
        type="checkbox"
        name="checkbox"
        ref={CheckBoxRef}
        onChange={(e) => {}}
        style={{ display: "none", position: "absolute" }}
      />
    </span>
  );
}

export default Checkbox;
