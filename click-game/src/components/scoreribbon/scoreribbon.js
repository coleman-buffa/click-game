import React from "react";
import "./style.css";

function scoreRibbon(props) {
  return (
    <nav className="navbar sticky-top">
      <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="brand">
        <a href="/">Mineral Mania</a>
        </li>
        <li className="nav-item nav-bar-li">
          {props.answerResult}
        </li>
        <li className="nav-item nav-bar-li">
          Score: {props.currentScore} | Top Score: {props.maxScore}
        </li>     
      </ul>
      </div>
   
    </nav>
  )
}

export default scoreRibbon;