import React from 'react'
import Logo from '../Images/MAC-wordmark-blue.png'
import { Menu, Segment } from 'semantic-ui-react'

class NavBar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='posts' active={activeItem === 'posts'} onClick={this.handleItemClick} />
          <Menu.Item name='events' active={activeItem === 'events'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src={Logo} alt="MAClogo" width='400' />
        </Segment>
      </div>
    )
  }
}

export default NavBar
