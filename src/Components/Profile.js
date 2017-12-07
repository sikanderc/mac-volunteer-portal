import React from 'react'
import { connect } from 'react-redux'
import { logOutUser } from '../Actions/user'

class Profile extends React.Component {
  handleLogout = () => {
    localStorage.removeItem('jwt')
    this.props.logOutUser()
  }

  render() {
    return (
      <div>
      <h1>Hello, {this.props.email}</h1>

      <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({ email: state.dataReducer.email })

export default connect(mapStateToProps, {logOutUser})(Profile)
