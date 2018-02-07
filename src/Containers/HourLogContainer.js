import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import { fetchHourLog } from '../Actions/hourLog'
import HourLogForm from './../Components/Forms/HourLogForm';
import HourLogCard from './../Components/Cards/HourLogCard';

class HourLogContainer extends Component {

  componentDidMount() {
    if (this.props.userID) {
      this.props.fetchHourLog(this.props.userID.toString())
    }
  }

  render() {
    return (
      <div>
        <h2>Hour Log Container</h2>
          <HourLogCard />
          <HourLogForm />
      </div>
    )
  }
}
// <Route exact path='/hourLog/:id' render={()=>(<HourLogCard />)} />

function mapStateToProps(state) {
  console.log(state);
  return {
    userID: state.id,
    hourLog: state.hourLog,
    isLoading: state.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchHourLog: (id) => {
      dispatch(fetchHourLog(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HourLogContainer)
