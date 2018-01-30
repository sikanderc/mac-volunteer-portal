import React from 'react'
import Logo from '../Images/MAC-wordmark-blue.png'
import ShortLogo from '../Images/MAC-logo-blue.png'
import { Menu, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutUser } from '../Actions/user'


class NavBar extends React.Component {
  state = {
    activeItem: this.props.history.location.pathname.split('/')[1]
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    if (!!this.props.loggedIn) {
      var secondaryMenu = (<Menu.Menu position='right'>
        <Menu.Item name='mineForMAC' active={activeItem === 'mineForMAC'} onClick={this.handleItemClick} as={Link} to='/mineForMAC' />
        <Menu.Item name='createEvent' active={activeItem === 'createEvent'} onClick={this.handleItemClick} as={Link} to='/events/new' />
        <Menu.Item name='myEvents' active={activeItem === 'myEvents'} onClick={this.handleItemClick} as={Link} to='/myEvents' />
        <Menu.Item name='hourLog' active={activeItem === 'hourLog'} onClick={this.handleItemClick} as={Link} to='/hourLog' />
        <Menu.Item name='logout' active={activeItem === 'logout' } onClick={() => {
          this.props.logOutUser()
          this.setState({ activeItem: 'logout' })
          this.props.history.push('/')
        }} />
      </Menu.Menu>)
    } else {
      secondaryMenu = (<Menu.Menu position='right'><Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} as={Link} to='/signup' /><Menu.Item name='login' active={activeItem === 'login' } onClick={this.handleItemClick} as={Link} to='/login' /></Menu.Menu>)
    }

    return (
      <div>
        <Menu pointing secondary stackable>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to='/'></Menu.Item>

          <Menu.Item name='posts' active={activeItem === 'posts'} onClick={this.handleItemClick} as={Link} to='/posts' />

          <Menu.Item name='events' active={activeItem === 'events'} onClick={this.handleItemClick} as={Link} to='/events' />
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
