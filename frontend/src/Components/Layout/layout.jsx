import React from "react";
import icon from "../../Assets/Images/logo.svg";
import "./layout.scss";

const ProgressBar = ({ progress }) => {
  const progressBarStyle = {
    height: `${progress}%`,
    background: "var(--pink)",
    boxShadow: "var(--shadow)",
    border: "3px solid black",
    width: "1%",
    position: "relative", // Added to make sure the end marker is positioned relative to this container
  };

  const endMarkerStyle = {
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    background: "var(--pink)",
    position: "absolute",
    boxShadow: "var(--shadow)",
    border: "3px solid black",
    top: "98%", // Positioned at the bottom of the progress bar
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
  };

  return (
    <div className="progress-bar" style={progressBarStyle}>
      <div style={endMarkerStyle}></div>
    </div>
  );
};

export default function Layout({ children }) {
  return (
    <div>
      <div className="Header-logo">
        <img src={icon} alt="icon-logo" width={40} height={40} />
      </div>
      <div className="flex-layout">
        <div className="question-child" style={{ height: "90vh" }}>
          {children}
        </div>

        <ProgressBar progress={50} />

        <div className="animation-sidebar">s</div>
      </div>
    </div>
  );
}
