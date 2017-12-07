import React from 'react'
import Logo from '../Images/MAC-wordmark-blue.png'
import { Menu, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Route, Link, withRouter} from 'react-router-dom'
import LoginForm from './Forms/LoginForm'
import { logOutUser } from '../Actions/user'


class NavBar extends React.Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    if (!!this.props.loggedIn) {
      var secondaryMenu = (<Menu.Menu position='right'>
        <Link to='/mineForMAC'>
          <Menu.Item name='mineForMAC' active={activeItem === 'mineForMAC'} onClick={this.handleItemClick} />
        </Link>
        <Link to='/events/new'>
          <Menu.Item name='createEvent' active={activeItem === 'createEvent'} onClick={this.handleItemClick} />
        </Link>
        <Link to='/myEvents'>
          <Menu.Item name='myEvents' active={activeItem === 'myEvents'} onClick={this.handleItemClick} />
        </Link>
        <Link to='/hourLog'>
          <Menu.Item name='hourLog' active={activeItem === 'hourLog'} onClick={this.handleItemClick} />
        </Link>
        <Menu.Item name='logout' active={activeItem === 'logout' } onClick={() => {
          this.props.logOutUser()
          this.setState({ activeItem: 'logout' })
          this.props.history.push('/')
        }} />
      </Menu.Menu>)
    } else {
      var secondaryMenu = (<Menu.Menu position='right'><Link to='/signup'><Menu.Item name='sign up' active={activeItem === 'sign up'} onClick={this.handleItemClick} /></Link><Link to='/login'><Menu.Item name='login' active={activeItem === 'login' } onClick={this.handleItemClick} /></Link></Menu.Menu>)
    }

    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
          </Link>

          <Link to='/posts'>
            <Menu.Item name='posts' active={activeItem === 'posts'} onClick={this.handleItemClick} />
          </Link>

          <Link to='/events'>
            <Menu.Item name='events' active={activeItem === 'events'} onClick={this.handleItemClick} />
          </Link>
          {secondaryMenu}
        </Menu>

        <Segment>
          <img src={Logo} alt="MAClogo" width='400' />
        </Segment>
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    auth: state.auth,
    loggedIn: state.loggedIn
  }
}


export default connect(mapStateToProps, {logOutUser})(NavBar)
