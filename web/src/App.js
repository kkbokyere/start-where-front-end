import React, { Component } from 'react';
import './pages/Search.scss';
import Search from "./pages/Search";
import Results from "./pages/Results";


const responseData = { locations: [{
  name: 'Brixton',
  lat: 51.4613,
  lng: -0.1156,
  happy: 20,
  neutral: 60,
  sad: 2
},{
  name: 'Tottenham',
  lat: 51.6050,
  lng: -0.0723,
  happy: 50,
  neutral: 10,
  sad: 40,
}],
relatedWords: ['related','related2']};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        locations: [],
        relatedWords: []
      },
    }
  }
  handleFetchData = async ({ location, interests }) => {
    // const responseData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    this.setState({
      data:responseData
    });
    console.log(location, interests);
  };

  render() {
    return (
      <div className="App">
        <Search onSubmitLocation={this.handleFetchData}/>
        <Results data={this.state.data} />
      </div>
    );
  }
}

export default App;
