import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import { fetchEvents } from '../../Actions/events'
import EventCard from './../Cards/EventCard';

class EventList extends Component {

  // componentDidMount() {
  //   this.props.fetchEvents()
  // }

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
// <Route exact path='/events/:id' render={()=>(<EventCard />)} />
// <Route exact path='/events/:userID' render={()=>(<UserEventList />)} />

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

export default connect(mapStateToProps, mapDispatchToProps)(EventList)
