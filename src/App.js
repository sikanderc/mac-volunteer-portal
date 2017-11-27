import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentWillMount () {
        const script = document.createElement("script");

        script.src = "https://authedmine.com/lib/simple-ui.min.js";
        script.async = true;

        document.body.appendChild(script);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MAC Volunteer Portal</h1>
        </header>
        <div className="coinhive-miner"
        	data-key="AczAYyZATpK635kyQ2vWTQchAcXBRmti">
        	<em>Loading...</em>
        </div>
      </div>
    );
  }
}

export default App;
