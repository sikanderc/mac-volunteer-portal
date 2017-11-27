import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import Logo from '../Images/MAC-wordmark-blue.png'

class NavBar extends React.Component {
  render() {
    return (
      <div className='NavBar'>
        <div class="ui secondary pointing menu">
          <a class="item active">
            <Link to='/'>Home</Link>
          </a>
          <a class="item">
            <Link to='/posts'>Posts</Link>
          </a>
          <a class="item">
            <Link to='/events'>Events</Link>
          </a>
          <div class="right menu">
            <a class="ui item">
              Sign Up
            </a>
            <a class="ui item">
              Login
            </a>
          </div>
        </div>
        <div class="ui segment">
          <img src={Logo} alt="MAClogo" width='400' />
        </div>
      </div>
    )
  }
}

export default NavBar
