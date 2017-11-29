import React from 'react'
import { Button, TextArea, Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';

class HourLog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      workDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      workDate: date
    });
  }

  render() {
    return (
      <Form>
        <h2>Hour Log</h2>
        <Form.Field>
          <label>Date Worked</label>
          <DatePicker selected={this.state.workDate} onChange={this.handleChange} dateFormat="LL" />
        </Form.Field>
        <Form.Input label='Hours Worked' name='hoursWorked' placeholder='Hours Worked' />
        <Form.Input label='Supervisor' placeholder="Supervisor" name='supervisorName' />
        <Form.Input label='Event' placeholder='Event' name='event' />
        <Form.Field>
          <label>What made you interested in volunteering with us?</label>
          <TextArea name='interestField' type='text' />
        </Form.Field>
        <Form.Field>
          <label>What can we do better?</label>
          <TextArea name='improvementField' type='text' />
        </Form.Field>
        <Form.Field>
          <label>Additional comments?</label>
          <TextArea name='infoField' type='text' />
        </Form.Field>
        <Button type='submit'>Submit for Approval</Button>
      </Form>
    )
  }
}

export default HourLog
