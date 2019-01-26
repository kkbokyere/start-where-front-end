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
    }
  }
  onMarkerClick = () => {
    console.log('click marker')
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.data);

    if(prevProps.data.length !== this.props.data.length) {
      this.calculateMapReactions();
    }

  }
  calculateMapReactions = () => {
    let noOfHappy = 0, noOfNeutral = 0, noOfSad = 0;
    this.props.data.forEach(({neutral, sad, happy}) => {
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

  };

  render() {
    const { data } = this.props;
    const { noOfHappy, noOfNeutral, noOfSad} = this.state;

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
            <li onClick={() => this.handleOnClickReaction('happy')}>Happy: {noOfHappy}</li>
            <li onClick={() => this.handleOnClickReaction('neutral')}>Neutral: {noOfNeutral}</li>
            <li onClick={() => this.handleOnClickReaction('sad')}>Sad: {noOfSad}</li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Results;
