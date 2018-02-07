import React, { Component } from 'react'
import HourLogCard from './../Cards/HourLogCard';

class HourLogList extends Component {

  formatHourLog = () => {
    if (this.props.hourLog) {
      const hourLogElements = []
      const hl = this.props.hourLog

      for (let key in hl) {
        hourLogElements.push(
          <li key={key} > <HourLogCard hourLogItem={hl[key]} /> </li>
        )
      }
      return hourLogElements

    } else {
      return null
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.formatHourLog()}
        </ul>
      </div>
    )
  }
}


export default HourLogList
