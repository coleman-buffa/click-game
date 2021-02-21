import React, { Component } from "react";
import Scorecard from "./components/scoreribbon/scoreribbon";
import Jumbotron from "./components/jumbotron/jumbotron";
import MineralCard from "./components/mineralcard/mineralcard";

import minerals from "./minerals.json";

class App extends Component {
  state = {
    minerals: minerals
  };

  render() {
    return (
      <div>
        {this.state.minerals.map(mineral => (
          <MineralCard
            id={mineral.id}
            key={mineral.id}
            name={mineral.name}
            image={mineral.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
