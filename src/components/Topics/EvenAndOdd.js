import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignEvenAndOdds(userInput) {
    const userInputArray = userInput.split(",").map(item => Number(item));

    let evens = [];
    let odds = [];

    for (let i = 0; i < userInputArray.length; i++) {
      if (userInputArray[i] % 2 === 0) {
        evens.push(userInputArray[i]);
      } else {
        odds.push(userInputArray[i]);
      }
    }
    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.assignEvenAndOdds(this.state.userInput);
          }}
        >
          {" "}
          Split{" "}
        </button>
        <span className="resultsBox">
          {" "}
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          {" "}
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}
