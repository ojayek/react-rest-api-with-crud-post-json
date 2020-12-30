import React, { Component } from "react";

import Header from "./layout/Header";
import Container from "./Container";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid">
          <Container />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
