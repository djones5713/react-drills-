import React, { Component } from "react";
import Image from "./components/Image";
import Cat from "./cat.jpg"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={Cat}/>
      </div>
    );
  }
}

export default App;
