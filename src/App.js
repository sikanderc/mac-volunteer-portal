import React, { Component } from 'react';
import './App.css';
import EventContainer from './Containers/EventContainer'
import PostContainer from './Containers/PostContainer'
import {Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
// import MiningPage from './Components/MiningPage';
import AuthAdapter from './Services/AuthAdapter'
import MiningPage from './Components/MiningPage'

class App extends Component {

  componentWillMount () {
    if (localStorage.getItem('jwt')) {
       AuthAdapter.currentUser()
         .then(user => {
           if (!user.error) {
             console.log("fetch user");
             this.setState({
               auth: {
                 isLoggedIn: true,
                 user: user
               }
             })
           }
         })
     }
  }

  logIn(loginParams){
    AuthAdapter.login(loginParams)
      .then( user => {
        if (!user.error) {
          this.setState({
            auth: { isLoggedIn: true, user: user}
          })
          localStorage.setItem('jwt', user.jwt )
        }
      })
  }

  logout(){
    localStorage.removeItem('jwt')
    this.setState({ auth: { isLoggedIn: false, user:{}}})
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
        <div>
          <MiningPage />
        </div>
      </div>
    );
  }
}

export default App;
