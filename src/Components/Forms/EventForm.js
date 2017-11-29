import React from 'react'
import { Button, TextArea, Form, Select } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import { stateOptions } from './common'

const format = 'h:mm a';
const now = moment().hour(0).minute(0);


class EventForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: null,
      startDate: moment(),
      endDate: moment(),
      startTime: now,
      endTime: now,
      location1: null,
      location2: null,
      city: null,
      state: null,
      zip: null,
      details:null
    };
  }

  onEventSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.name.value);
    console.log(event.target.startDate.value);
    console.log(event.target.startTime.value);
    console.log(event.target.endDate.value);
    console.log(event.target.endTime.value);
    console.log(event.target.city.value);
    console.log(this.state.state);
    console.log(event.target.zip.value);


    this.setState({
      name: event.target.name.value,
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value,
      startTime: event.target.startTime.value,
      endTime: event.target.endTime.value,
      location1: event.target.location1.value,
      location2: event.target.location2.value,
      city: event.target.city.value,
      zip: event.target.zip.value,
      details:event.target.details.value
    })
  }

  handleStartChange = (date) => {
    this.setState({
      startDate: date
    });
  }

  handleEndChange = (date) => {
    this.setState({
      endDate: date
    });
  }

  handleStateChange = (e) => {
    this.setState({
      state: e.target.innerText
    })
  }

  render() {
    return (
      <Form onSubmit={this.onEventSubmit}>
        <h2>Create an Event</h2>
        <Form.Field>
          <label>Event Name</label>
          <input name='name' type='text' placeholder='Event Name' />
        </Form.Field>
        <Form.Field>
          <label>Start Date</label>
          <DatePicker name='startDate' selected={this.state.startDate} selectsStart startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleStartChange} dateFormat="LL" />
        </Form.Field>
        <Form.Field>
          <label>Start Time</label>
          <TimePicker name='startTime' showSecond={false} defaultValue={now} className="xxx" onChange={this.handleStartTimeChange} format={format} use12Hours />
        </Form.Field>
        <Form.Field>
          <label>End Date</label>
          <DatePicker name='endDate' selected={this.state.endDate} selectsEnd startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleEndChange} dateFormat="LL" />
        </Form.Field>
        <Form.Field>
          <label>End Time</label>
          <TimePicker name='endTime' showSecond={false} defaultValue={now} className="yyy" onChange={this.handleEndTimeChange} format={format} use12Hours />
        </Form.Field>
        <Form.Input label='Address 1' placeholder="Address 1" name='location1' />
        <Form.Input label='Address 2' placeholder='Address 2' name='location2' />
        <Form.Group unstackable widths={3}>
          <Form.Input label='City' placeholder="City" name='city' />
          <Form.Select label='State' options={stateOptions} placeholder="State" name='state' onChange={this.handleStateChange} />
          <Form.Input label='Zip Code' placeholder="Zip Code" name='zip' />
        </Form.Group>
        <Form.Field>
          <label>Event Details</label>
          <TextArea name='details' type='text' placeholder='Write additional information here.' />
        </Form.Field>
        <Form.Button type='submit'>Submit for Approval</Form.Button>
      </Form>
    )
  }
}

export default EventForm
