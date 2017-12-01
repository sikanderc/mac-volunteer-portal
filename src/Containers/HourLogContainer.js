import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import { fetchHourLogs } from '../Actions/hourLog'
import HourLogForm from './../Components/Forms/HourLogForm';
import HourLogList from './../Components/Lists/HourLogList';
import HourLogCard from './../Components/Cards/HourLogCard';

class HourLogContainer extends Component {

  // componentDidMount() {
  //   this.props.fetchHourLogs()
  // }

  render() {
    return (
      <div>
        <Route path='/hourLog' render={()=>(<h2>Hour Log Container</h2>)} />
        <Switch>
          <Route exact path='/hourLog' render={()=>(<HourLogList />)} />
          <Route exact path='/hourLog/new' render={()=>(<HourLogForm />)} />
        </Switch>
      </div>
    )
  }
}
// <Route exact path='/hourLog/:id' render={()=>(<HourLogCard />)} />

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

export default connect(mapStateToProps, mapDispatchToProps)(HourLogContainer)
