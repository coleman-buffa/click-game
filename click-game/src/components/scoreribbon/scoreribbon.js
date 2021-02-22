import React from "react";
import "./style.css";

function scoreRibbon() {
  return (
    <nav className="navbar sticky-top">
      <div className="container-fluid">
      <ul className="navbar-nav">
        <li>
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
   
    </nav>
  )
}

export default scoreRibbon;