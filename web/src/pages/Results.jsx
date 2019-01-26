import React, { Component } from 'react';
import Map from '../components/Map/Map';
import './Results.scss'

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfHappy: 0,
      noOfNeutral: 0,
      noOfSad: 0,
      markers: []
    }
  }
  onMarkerClick = () => {
    console.log('click marker')
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.data.locations.length !== this.props.data.locations.length) {
      this.calculateMapReactions();
    }

  }
  calculateMapReactions = () => {
    let noOfHappy = 0, noOfNeutral = 0, noOfSad = 0;
    this.props.data.locations.forEach(({neutral, sad, happy}) => {
      noOfHappy = noOfHappy + happy;
      noOfNeutral = noOfNeutral + neutral;
      noOfSad = noOfSad + sad;
    });

    this.setState({
      noOfHappy,
      noOfNeutral,
      noOfSad
    });
  };

  handleOnClickReaction = (type) => {
    console.log('reaction', type);
    const updatedMarkers = this.props.data.locations.map((props, i, array) => {
      return {
        lng: props.lng,
        lat: props.lat,
        size: props[type]
      }
    });
    this.setState({
      markers: updatedMarkers
    })
  };

  render() {
    const { data } = this.props;
    const { noOfHappy, noOfNeutral, noOfSad, updatedMarkers} = this.state;
    console.log(updatedMarkers);
    return (
      <div className="results">
        <aside className="sidebar">
          <h2>Locations</h2>
          <ul>
          {data && data.locations.map(({ name }) => <li key={name}>{name}</li>)}
          </ul>
          <h2>Related Words</h2>
          <ul>
          {data && data.relatedWords.map((word) => <li key={word}>{word}</li>)}
          </ul>
        </aside>
        <Map
          markers={data && data.locations}
          isMarkerShown
          onMarkerClick={this.onMarkerClick}
        />
        <aside className="sidebar">
          <h2>Overall Satisfaction</h2>
          <ul>
            <li onClick={() => this.handleOnClickReaction('happy')}>Happy: {`${noOfHappy}%`}</li>
            <li onClick={() => this.handleOnClickReaction('neutral')}>Neutral: {`${noOfNeutral}%`}</li>
            <li onClick={() => this.handleOnClickReaction('sad')}>Sad: {`${noOfSad}%`}</li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Results;
