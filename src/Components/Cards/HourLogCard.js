import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import { fetchHourLog } from '../../Actions/hourLog'

class HourLogCard extends Component {

  // componentDidMount() {
  //   this.props.fetchHourLog()
  // }

  render() {
    return (
      <div>
        Hour Log Card
      </div>
    )
  }
}


export default HourLogCard
