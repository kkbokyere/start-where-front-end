import React, { Component } from 'react';
import './App.scss';
import Homepage from "./pages/Homepage";
import Results from "./pages/Results";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage/>
        <Results />
      </div>
    );
  }
}

export default App;
