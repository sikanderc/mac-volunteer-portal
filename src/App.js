import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import NavBar from './Components/NavBar'
import SideBar from './Components/SideBar'
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
import ApplicationContent from "./Components/ApplicationContent"


// import EventForm from './Components/Forms/EventForm'


class App extends Component {

  componentWillMount () {
    if (localStorage.getItem('jwt')) {
       this.props.getCurrentUser()
     }
  }

  render() {

    const isAdmin = true;

    return (
      <div className="App">
        <NavBar history={this.props.history}/>

        { isAdmin ?
            <SideBar history={this.props.history}>
              <ApplicationContent />
            </SideBar>
          : <ApplicationContent/>
        }

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
