import React, { Component } from 'react';
import './App.css';
import EventContainer from './Containers/EventContainer'
import PostContainer from './Containers/PostContainer'
import {Route} from 'react-router-dom'
import NavBar from './Components/NavBar'

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
      <NavBar user={this.props.user}/>
        <div>
          <Route path='/posts' components={PostContainer} />
        </div>
        <div>
          <Route path='/events' components={EventContainer} />
        </div>
        <div className="coinhive-miner"
        	data-key="AczAYyZATpK635kyQ2vWTQchAcXBRmti">
        	<em>Loading...</em>
        </div>
      </div>
    );
  }
}

export default App;
