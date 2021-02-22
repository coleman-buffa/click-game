import React from "react";
import "./style.css";

function scoreRibbon() {
  return (
    <div className="navbar sticky-top">
      <ul className="navbar-nav">
        <li className="brand nav-bar-li">
        <a href="/">Mineral Mania</a>
        </li>
        <li className="nav-item nav-bar-li">
          Click an image to begin!
        </li>
        <li className="nav-item nav-bar-li">
          Score: 0 | Top Score: 0
        </li>     
      </ul>
    </div>
  )
}

export default scoreRibbon;