import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import { fetchEvents } from '../Actions/events'
import EventForm from './../Components/Forms/EventForm';
import EventList from './../Components/Lists/EventList';
import UserEventList from './../Components/Lists/UserEventList';
import EventCard from './../Components/Cards/EventCard';

class EventContainer extends Component {

  // componentDidMount() {
  //   this.props.fetchEvents()
  // }

  render() {
    return (
      <div>
        <Route path='/events' render={()=>(<h2>Events Container</h2>)} />
        <Switch>
          <Route exact path='/events' render={()=>(<EventList />)} />
          <Route exact path='/events/new' render={()=>(<EventForm />)} />
        </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer)
