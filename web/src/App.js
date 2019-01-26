import React, { Component } from 'react';
import './pages/Search.scss';
import Search from "./pages/Search";
import Results from "./pages/Results";


const responseData = [{
  name: 'brixton',
  lat: '',
  lng: '',
  happy: '',
  nuetral: '',
}];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }
  handleFetchData = async ({ location, interests }) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
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
