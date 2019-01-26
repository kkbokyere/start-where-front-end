import React, { Component } from 'react';
import './pages/Search.scss';
import Search from "./pages/Search";
import Results from "./pages/Results";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <Results />
      </div>
    );
  }
}

export default App;
