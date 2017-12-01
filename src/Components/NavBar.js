import React from 'react'
import Logo from '../Images/MAC-wordmark-blue.png'
import { Menu, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
import LoginForm from './Forms/LoginForm'


class NavBar extends React.Component {
  state = {
    activeItem: 'home',
    authLink: 'login'
   }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  componentDidMount () {this.checkState()}
  checkState = () => {
    return this.props.isLoggedIn ? (this.setState({authLink: 'logout'})) : (this.setState({authLink: 'login'} && <Route path='/login' render={()=>(<LoginForm/>)} />))
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/></Link>
          <Link to='/posts'><Menu.Item name='posts' active={activeItem === 'posts'} onClick={this.handleItemClick} /></Link>
          <Link to='/events'><Menu.Item name='events' active={activeItem === 'events'} onClick={this.handleItemClick} /></Link>
          <Link to='/mineForMAC'><Menu.Item name='mineForMAC' active={activeItem === 'mineForMAC'} onClick={this.handleItemClick} /></Link>
          <Menu.Menu position='right'>
            <Link to='/events/new'><Menu.Item name='createEvent' active={activeItem === 'createEvent'} onClick={this.handleItemClick} /></Link>
            <Link to='/myEvents'><Menu.Item name='myEvents' active={activeItem === 'myEvents'} onClick={this.handleItemClick} /></Link>
            <Link to='/hourLog'><Menu.Item name='hourLog' active={activeItem === 'hourLog'} onClick={this.handleItemClick} /></Link>
            <Link to='/signup'><Menu.Item name='sign up' active={activeItem === 'sign up'} onClick={this.handleItemClick} /></Link>
            <Link to={'/'+ this.state.authLink}><Menu.Item name={this.state.authLink} active={activeItem === this.state.authLink } onClick={this.handleItemClick} /></Link>
          </Menu.Menu>
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
    isLoggedIn: state.isLoggedIn
  }
}


export default connect(mapStateToProps)(NavBar)
