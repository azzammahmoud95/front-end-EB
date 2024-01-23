import React, { useState, useEffect } from "react";
import icon from "../../Assets/Images/logo.svg";
import "./layout.scss";

const ProgressBar = ({ progress }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const progressBarWrapper = {
    height: '100%',
    boxShadow: "var(--shadow)",
    width: isMobile ? '100%' : '0.4%',
    border: "3px solid black",
    background: 'white'
  };

  const progressBarStyle = {
    height: isMobile ? '5px' : `${progress}%`, // Adjust the height as needed
    background: "var(--pink)",
    boxShadow: "var(--shadow)",
    width: isMobile ? `${progress}%` : '100%',
    position: "relative",
    zIndex: 10
  };

  const endMarkerStyle = {
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    background: "var(--pink)",
    position: "absolute",
    boxShadow: "var(--shadow)",
    border: "3px solid black",
    top: isMobile ? "-200%" : "98%",
    left: isMobile ? "100%" : "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
  };

  return (
    <div style={progressBarWrapper}>
      <div className="progress-bar" style={progressBarStyle}>
        <div style={endMarkerStyle}></div>
      </div>
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

        <ProgressBar progress={20} />

        <div className="animation-sidebar">s</div>
      </div>
    </div>
  );
}
