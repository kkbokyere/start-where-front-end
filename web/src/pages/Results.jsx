import React, { Component } from 'react';
import Map from '../components/Map/Map';
import './Results.scss'

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

  onMarkerClick = () => {
    console.log('click marker')
  };

  render() {
    return (
      <div className="results">
        <aside className="sidebar">
          <h2>Top Location</h2>
        </aside>
        <Map
          isMarkerShown
          onMarkerClick={this.onMarkerClick}
        />
        <aside className="sidebar">
          <h2>Hashtags</h2>

          <ul>
            <li>
          </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Results;
