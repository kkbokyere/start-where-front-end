import React, { Component } from 'react';
import Map from '../components/Map/Map';
import './Results.scss'

class Results extends Component {
  onMarkerClick = () => {
    console.log('click marker')
  };

  render() {
    console.log(this.props.data);
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
