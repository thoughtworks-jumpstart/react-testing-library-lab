import React from "react";

class Toggle extends React.Component {
  state = { on: false };
  toggle = () => this.setState(({ on }) => ({ on: !on }));

  render() {
    return (
      <React.Fragment>
        <h1>The State is: {this.state.on.toString()}</h1>
        <button onClick={this.toggle}>Toggle State</button>
      </React.Fragment>
    );
  }
}

export { Toggle };
