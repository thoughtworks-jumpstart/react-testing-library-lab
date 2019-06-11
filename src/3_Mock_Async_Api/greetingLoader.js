import React, { Component } from "react";
import { loadGreeting } from "./api";

class GreetingLoader extends Component {
  state = { greeting: "", userInput: "" };

  handleOnChange = async event => {
    event.preventDefault();
    const userInput = event.target.value;
    this.setState({ userInput: userInput });
  };

  handleLoadGreeting = async event => {
    event.preventDefault();
    const { data } = await loadGreeting(this.state.userInput);
    this.setState({ greeting: data.greeting });
  };

  render() {
    return (
      <form onSubmit={this.loadGreetingForInput}>
        <label htmlFor="name">Name</label>
        <input id="name" onChange={this.handleOnChange} />
        <button type="submit" onClick={this.handleLoadGreeting}>
          Load Greeting
        </button>
        <div data-testid="greeting">{this.state.greeting}</div>
      </form>
    );
  }
}

export { GreetingLoader };
