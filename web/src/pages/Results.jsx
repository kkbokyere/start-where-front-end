import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
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
