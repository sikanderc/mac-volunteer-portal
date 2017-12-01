import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import { Redirect } from 'react-router';
import NavBar from './Components/NavBar'
import EventContainer from './Containers/EventContainer'
import PostContainer from './Containers/PostContainer'
import MiningContainer from './Containers/MiningContainer'
import HourLogContainer from './Containers/HourLogContainer'
import LoginForm from './Components/Forms/LoginForm';
import SignUpForm from './Components/Forms/SignUpForm';
import HomePage from './Components/HomePage';
import AuthAdapter from './Services/AuthAdapter'
// import EventForm from './Components/Forms/EventForm'


class App extends Component {
  state={
    auth: {
      isLoggedIn: false,
      user: null
    }
  }


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
          <Route exact path='/' render={()=>(<h1>Home</h1>)} />
          <Route path='/posts' component={PostContainer} />
          <Route path='/events' component={EventContainer} />
          <Route path='/mineForMAC' component={MiningContainer} />
          <Route path='/hourLog' component={HourLogContainer} />
          <Route path='/login' render={()=>(<LoginForm />)} />
          <Route path='/signup' render={()=><SignUpForm />} />
        </div>
      </div>
    );
  }
}
// <Route path='/logout' render={()=>(<LogoutForm />)} />

export default App;
