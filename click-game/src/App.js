import React, { Component } from "react";
import Wrapper from "./components/wrapper/wrapper";
import Scoreribbon from "./components/scoreribbon/scoreribbon";
import Jumbotron from "./components/jumbotron/jumbotron";
import MineralCard from "./components/mineralcard/mineralcard";
import Footer from "./components/footer/footer";


import minerals from "./minerals.json";

class App extends Component {
  state = {
    minerals: minerals,
    selectedCards: [],
    currentScore: 0,
    maxScore: 0
  };

  componentDidMount() {
    this.shuffleCards();
  }

  shuffleCards = () => {
    const minerals = this.state.minerals.sort(() => Math.random() - 0.5);
    this.setState({minerals: minerals});
  }

  selectCard = (id) => {
    for (let i = 0; i < this.state.selectedCards.length; i++) {
      if (id == this.state.selectedCards[i]) {
      } else {
        this.setState({ currentScore: this.state.currentScore + 1 });
        console.log(`Score: ${this.state.currentScore}`);
      }
    }
    this.state.selectedCards.push(id);
    this.shuffleCards();
  }

  render() {
    return (
      <Wrapper>
        <Scoreribbon 

        />
        <Jumbotron />
        {this.state.minerals.map(mineral => (
          <MineralCard
            shuffleCards={this.shuffleCards}
            selectCard={this.selectCard}
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
