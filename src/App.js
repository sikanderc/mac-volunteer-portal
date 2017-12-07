import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import NavBar from './Components/NavBar'
import EventContainer from './Containers/EventContainer'
import PostContainer from './Containers/PostContainer'
import MiningContainer from './Containers/MiningContainer'
import HourLogContainer from './Containers/HourLogContainer'
import LoginForm from './Components/Forms/LoginForm';
import SignUpForm from './Components/Forms/SignUpForm';
import HomePage from './Components/HomePage';
import UserPage from './Components/UserPage';
import { connect } from "react-redux";
import { getCurrentUser, signInUser, logOutUser } from "./Actions/user";
import authorize from "./authorize";
import Profile from "./Components/Profile";


// import EventForm from './Components/Forms/EventForm'


class App extends Component {

  componentWillMount () {
    if (localStorage.getItem('jwt')) {
       this.props.getCurrentUser()
     }
  }

  render() {
    const AuthLoginForm = authorize(LoginForm);
    const AuthProfile = authorize(Profile);

    return (
      <div className="App">
      <NavBar history={this.props.history}/>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route path='/posts' component={PostContainer} />
          <Route path='/events' component={EventContainer} />
          <Route path='/mineForMAC' component={MiningContainer} />
          <Route path='/hourLog' component={HourLogContainer} />
          <Route path="/profile" component={AuthProfile} />
          <Route path="/users" component={UserPage} />
          <Route path='/login' render={(props)=>(<AuthLoginForm {...props} />)} />
          <Route path='/signup' render={()=><SignUpForm />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ dataReducer }) => ({
  dataReducer
});

export default withRouter(
  connect(mapStateToProps, {
    getCurrentUser,
    signInUser,
    logOutUser
  })(App)
);
