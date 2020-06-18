import React, { Component } from "react";
import axios from "axios";
import GridList from "./components/GridList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const endpoint =
      "http://metabolic2.whirl-i-gig.com:8085/Front/getData/download/1";
    axios.get(endpoint).then((response) => {
      this.setState({
        items: response.data,
        isLoading: false,
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? (
          <h2 style={{ textAlign: "center" }}>Loading...</h2>
        ) : (
          <GridList gridItems={this.state.items} />
        )}
      </div>
    );
  }
}

export default App;
