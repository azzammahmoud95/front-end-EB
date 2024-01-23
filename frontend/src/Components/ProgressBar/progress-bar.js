import React from "react";
import "./progress-bar.scss";
export default function ProgressBar({progress}) {
  return (
    <div className="progressBarWrapper">
      <div className="progress-bar" style={{ height: `${progress}%` }}>
        <div className="end-marker"></div>
      </div>
    </div>
  );
}
