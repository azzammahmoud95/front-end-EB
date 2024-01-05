import React from "react";
import "./Loader.scss";

function Loader({ fullScreen, onlyDots }) {
  if (!fullScreen) {
    return (
      <div className="Loader_Main">
        {!onlyDots && <div className="Loader_Text">Loading</div>}
        <div className="bouncy-loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Loader_Main_fullScreen">
        <div className="Loader_Main_Background"></div>
        <div className="Loader_Main_Foreground">
          {!onlyDots && <div className="Loader_Text">Loading</div>}
          <div className="bouncy-loader">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
