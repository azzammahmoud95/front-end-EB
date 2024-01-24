import React, { useState, useEffect } from "react";
import icon from "../../Assets/Images/logo.svg";
import "./layout.scss";
import TriangleStack from "../TriangleStack/TriangleStack";
import BackButton from "../BackButton/back-button";

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
    width: "15px",
    height: "15px",
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
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setColumns(3);
      } else if (window.innerWidth > 768) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };// Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className="Header-logo">
        <img src={icon} alt="icon-logo" width={40} height={40} />
      </div>
      <div className="flex-layout">
        <div className="question-child">
        <BackButton />{" "}
          {children}
        </div>

        <ProgressBar progress={20} />

        <div className="animation-sidebar">
        <div
  className="triangle-stack-container"
  style={{
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`,
    // gap: "50px",
  }}
>
                   <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />

          <TriangleStack />     <TriangleStack />     <TriangleStack />     <TriangleStack />     <TriangleStack />     <TriangleStack />     <TriangleStack />     <TriangleStack />     <TriangleStack />     <TriangleStack />
          </div>
          </div>
      </div>
    </div>
  );
}
