import React, { Component } from 'react';
import HeatCircle from "../components/HeatCircle/HeatCircle";

class Results extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    }
  }
  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    this.setState({
      data
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="results-page">
        <div>

        </div>
        <HeatCircle width={200}/>
        <HeatCircle width={200}/>
        <HeatCircle width={200}/>
      </div>
    );
  }
}

export default Results;
