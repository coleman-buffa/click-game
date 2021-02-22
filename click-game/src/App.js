import React, { Component } from "react";
import Wrapper from "./components/wrapper/wrapper";
import Scoreribbon from "./components/scoreribbon/scoreribbon";
import Jumbotron from "./components/jumbotron/jumbotron";
import MineralCard from "./components/mineralcard/mineralcard";
import Footer from "./components/footer/footer";


import minerals from "./minerals.json";

class App extends Component {
  state = {
    minerals: minerals
  };

  render() {
    return (
      <Wrapper>
        <Scoreribbon />
        <Jumbotron />     
        {this.state.minerals.map(mineral => (
          <MineralCard
            id={mineral.id}
            key={mineral.id}
            name={mineral.name}
            image={mineral.image}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
