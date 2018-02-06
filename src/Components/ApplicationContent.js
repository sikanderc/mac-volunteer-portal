import React, { Component } from 'react';
import '../App.css';
import { Route } from 'react-router-dom'
import EventContainer from '../Containers/EventContainer'
import PostContainer from '../Containers/PostContainer'
import MiningContainer from '../Containers/MiningContainer'
import HourLogContainer from '../Containers/HourLogContainer'
import LoginForm from './Forms/LoginForm';
import SignUpForm from './Forms/SignUpForm';
import HomePage from './HomePage';
import UserPage from './UserPage';
import authorize from "../authorize";
import Profile from "./Profile";

class ApplicationContent extends Component {
  render() {
    const AuthLoginForm = authorize(LoginForm);
    const AuthProfile = authorize(Profile);

    return (
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
    )
  }
}

export default ApplicationContent;
