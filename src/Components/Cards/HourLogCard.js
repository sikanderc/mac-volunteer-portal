import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import { fetchHourLog } from '../../Actions/hourLog'

class HourLogCard extends Component {

  // componentDidMount() {
  //   this.props.fetchHourLog()
  // }

  render() {
    console.log("CARD", this.props)
    return (
      <div>
        <p> Date Worked: {this.props.hourLogItem.date_worked} </p>
      </div>
    )
  }
}


export default HourLogCard
