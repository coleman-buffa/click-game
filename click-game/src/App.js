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
    maxScore: 0,
    animate: ''
  };

  componentDidMount() {
    this.shuffleCards();
  }

  shuffleCards = () => {
    const minerals = this.state.minerals.sort(() => Math.random() - 0.5);
    this.setState({ minerals: minerals });
  }

  selectCard = (id) => {
    if (this.state.selectedCards.indexOf(id) > -1) {
      this.setState({
        currentScore: 0,
        selectedCards: [],
        animate: "animate__shakeX"
      });
      console.log("You lose!");

    } else {
      this.setState({
        animate: "",
        currentScore: this.state.currentScore + 1
      });
      console.log(`Score: ${this.state.currentScore}`);
      this.state.selectedCards.push(id);
      console.log(this.state.selectedCards);
      if (this.state.currentScore >= this.state.maxScore) {
        this.setState({ maxScore: this.state.currentScore + 1 });
      }
    }
    this.shuffleCards();
  }

  render() {
    return (
      <div className="container-fluid">
        <Scoreribbon
          currentScore={this.state.currentScore}
          maxScore={this.state.maxScore}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.minerals.map(mineral => (
            <MineralCard
              selectCard={this.selectCard}
              id={mineral.id}
              key={mineral.id}
              name={mineral.name}
              image={mineral.image}
              animate={this.state.animate}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
