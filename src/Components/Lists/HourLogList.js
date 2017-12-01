import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import { fetchHourLogs } from '../../Actions/hourLog'
import HourLogCard from './../Cards/HourLogCard';

class HourLogList extends Component {

  // componentDidMount() {
  //   this.props.fetchHourLogs()
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
// <Route exact path='/hourLog/:id' render={()=>(<HourLogCard />)} />
// <Route exact path='/hourLog/:userID' render={()=>(<UserHourLogList />)} />

function mapStateToProps(state) {
  console.log(state);
  return {
    hourLog: state.hourLog,
    isLoading: state.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchHourLogs: () => {
      dispatch(fetchHourLogs())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HourLogList)
