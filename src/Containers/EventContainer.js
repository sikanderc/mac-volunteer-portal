import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchEvents } from '../Actions/events'

class EventContainer extends Component {

  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {
    return (
      <div>
      { this.props.isLoading ? <p>Loading</p> : <p>Not Loading</p> }
        <ul>
          <li />
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    events: state.events,
    isLoading: state.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchEvents: () => {
      dispatch(fetchEvents())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer)
