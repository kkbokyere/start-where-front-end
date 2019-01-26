import React, { Component } from 'react';

class Homepage extends Component {
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
    fetch();
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
      <div className="homepage">
        <h1>Start Where</h1>
        <div>
          <input onChange={this.handleSetLocation} name="location" placeholder="Location"/>
          <input onChange={this.handleSetInterests} name="interest" placeholder="Interests"/>
          <button type="submit" onClick={this.handleSubmitSearch}>Search</button>
        </div>
      </div>
    );
  }
}

export default Homepage;
