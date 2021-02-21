import React, { Component } from "react";
import Scorecard from "./components/scoreribbon/scoreribbon";
import Jumbotron from "./components/jumbotron/jumbotron";
import MineralCard from "./components/mineralcard/mineralcard";
import Wrapper from "./components/wrapper/wrapper";

import minerals from "./minerals.json";

class App extends Component {
  state = {
    minerals: minerals
  };

  render() {
    return (
      <Wrapper>
        {this.state.minerals.map(mineral => (
          <MineralCard
            id={mineral.id}
            key={mineral.id}
            name={mineral.name}
            image={mineral.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
