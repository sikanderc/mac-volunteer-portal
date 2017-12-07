import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import { fetchEvents } from '../../Actions/events'
import { Segment } from 'semantic-ui-react'
import './EventList.css'

class EventList extends Component {

  componentDidMount() {
    this.props.fetchEvents()
  }

  events = () => {
    let names = []
    for(let key in this.props.data.events) {
      names.push(<li key={key}>
          <Segment.Group textAlign='center' raised>
            <Segment color='black' size={'big'}>
              Event:<br/>
              {this.props.data.events[key].name}
            </Segment>
            <Segment>
              Location:<br/>
              {this.props.data.events[key].location1}
            </Segment>
            <Segment>
              Details:<br/>
              {this.props.data.events[key].details}
            </Segment>
            <Segment.Group horizontal>
              <Segment>
                Start Date:<br/>
                {this.props.data.events[key].start_date}
              </Segment>
              <Segment>
                End Date:<br/>
                {this.props.data.events[key].end_date}
              </Segment>
            </Segment.Group>
            <Segment.Group horizontal>

              <Segment>
                Start Time:<br/>
                {this.props.data.events[key].start_time}
              </Segment>
              <Segment>
                End Time:<br/>
                {this.props.data.events[key].end_time}
              </Segment>
            </Segment.Group>
          </Segment.Group>
        </li>)
    }
    return names
  }


  render() {
    return(
      <div className="wrapper">
        <div className="eventsListcontainer">
          {(!this.props.data.events) ? "Loading..." : <div id="eventsList"><ul>{this.events()}</ul></div>}
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
