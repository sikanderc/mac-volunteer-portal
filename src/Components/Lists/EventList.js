import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import { fetchEvents } from '../../Actions/events'
import { Card } from 'semantic-ui-react'

class EventList extends Component {

  componentDidMount() {
    this.props.fetchEvents()
  }

  events = () => {
    let names = []
    for(let key in this.props.data.events) {
      names.push(<Card key={key} header={this.props.data.events[key].name} meta={this.props.data.events[key].location1} description={this.props.data.events[key].details}/>)
    }
    return names
  }


  render() {
    return(
      <div className="wrapper">
        <div className="eventsList">
          {(!this.props.data.events) ? "Loading..." : <div><Card.Group>{this.events()}</Card.Group></div>}
        </div>
      </div>
    )
  }
}
// <Route exact path='/events/:id' render={()=>(<EventCard />)} />
// <Route exact path='/events/:userID' render={()=>(<UserEventList />)} />

function mapStateToProps(state) {
  console.log("EVENT LIST MPSTETOPRPS", state);
  return {
    data: state.data,
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
