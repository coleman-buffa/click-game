import React from "react";
import "./style.css";

function MineralCard(props) {
  return (
    <div className="card" onClick={() => props.selectCard(props.id)}>      
        <img alt={props.name} src={props.image} />      
    </div>
  );
}

export default MineralCard;