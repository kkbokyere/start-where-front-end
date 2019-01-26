import React, { Component } from 'react';
import './Search.scss';
class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: null,
      interests: []
    }
  }
  handleSubmitSearch = async (e) => {
    console.log(this.state);
    //call api
    //
    e.preventDefault();
    return false;
  };
  handleSetLocation = (e) => {
    this.setState({
      location: e.target.value
    })
  };
  handleSetInterests = (e) => {
    this.setState({
      interests: e.target.value
    })

  };
  render() {
    return (
      <div className="search">
        <h1>Start Where</h1>
        <div>
          {/*<Input onChange={this.handleSetLocation} placeholder="location"/>*/}
          {/*<Input onChange={this.handleSetInterests} placeholder="location"/>*/}
          <input onChange={this.handleSetLocation} name="location" placeholder="Location"/>
          <input onChange={this.handleSetInterests} name="interest" placeholder="Interests"/>
          <button type="submit" onClick={this.handleSubmitSearch}>Search</button>
        </div>
      </div>
    );
  }
}

export default Search;
