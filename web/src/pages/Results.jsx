import React, { Component } from 'react';
import Map from '../components/Map/Map';
import './Results.scss'

class Results extends Component {
  onMarkerClick = () => {
    console.log('click marker')
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.data);

  }
  mapReactions = () => {
    console.log(this.props.data);
  };

  render() {
    const { data } = this.props;

    return (
      <div className="results">
        <aside className="sidebar">
          <h2>Top Location</h2>
          <ul>
          {data.map(({ name }) => <li key={name}>{name}</li>)}
          </ul>
        </aside>
        <Map
          markers={this.props.data}
          isMarkerShown
          onMarkerClick={this.onMarkerClick}
        />
        <aside className="sidebar">
          <h2>Reactions</h2>
          <ul>
            <li></li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Results;
