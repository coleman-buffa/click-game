# Click Game

The mineral mania is upon you! Click on a card to start the game and do your best to avoid clicking on the same card. The game will keep track of the number of times you have chosen a card without selecting a duplicate. It also keeps track of your high score! If you pick a card you have already chosen the game ends and resets. 

![Walkthrough](./click-game/public/assets/mineral-mania.gif)

## Table of Contents

| |||
|:-|:-|:-|
| [Project Introduction](#click-game) | [Table of Contents](#table-of-contents) | [Goals and Methods](#goals-and-methods) 
| [Deployed Link](#deployed-link) | [Technologies](#technologies) | [Author](#author) 
| [Acknowledgments](#acknowledgments) | [License](#license) |
---

## Goals and Methods

This was my first project using React so the goals on this build were to experiment and learn. I opted tp use React's class based implementation, but plan on building the next project using the functional implementation. The star of the show was a series of state variables that were used to manipulate the page as the user interacted with the game. The list includes:
```javascript
class App extends Component {
  state = {
    minerals: minerals,
    selectedCards: [],
    currentScore: 0,
    maxScore: 0,
    answerResult: "Click an image to begin",
    animate: ''
  };
```
Each mineral card on the page is built from a JSON file that contains an ID, a name, and a reference to an image for each mineral. This list was handed off as a prop to the render the card component. The snippet below resides in App.js:
```javascript
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
```
React requires that each component reside within one parent element which is the purpose of Wrapper. In addition to serving as the bin which contains all the mineral cards Wrapper also provides all the CSS styling.

## Deployed Link

[Deployed to GitHub Pages]()

## Technologies 

|[React](https://reactjs.org/)


## Author

Coleman Buffa

* [Git Hub](https://github.com/coleman-buffa/click-game)
* [My Portfolio](https://colemanbuffa-portfolio.herokuapp.com/)
* [LinkedIn](https://www.linkedin.com/in/coleman-buffa/)

## Acknowledgments

My thanks to the many mentors and friends who are a constant source of project ideas, learning topics, and guidance.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### [Back to Table of Contents](#table-of-contents)