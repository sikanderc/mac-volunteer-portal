import React from 'react'
import { Button, TextArea, Form, Message } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux'
import { createHourLog, clearHourLogMessages } from '../../Actions/hourLog'

class HourLogForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      workDate: moment(),
      hoursWorked: "",
      supervisorName: "",
      event: "",
      interestField: "",
      infoField: "",
      improvementField: ""
    };
  }

  componentWillUnmount() {
    this.props.clearHourLogMessages()
  }

  handleHourLogSubmit = () => {
    const currentHourLog = {
      user_id: this.props.userID,
      date_worked: this.state.workDate,
      hours_worked: this.state.hoursWorked,
      supervisor_name: this.state.supervisorName,
      interest_field: this.state.interestField,
      improvement_field: this.state.improvementField,
      info_field: this.state.infoField,
      event_id: this.state.event
    }

    this.props.clearHourLogMessages()
    this.props.createHourLog(currentHourLog)

    this.setState({
      workDate: moment(),
      hoursWorked: "",
      supervisorName: "",
      event: "",
      interestField: "",
      infoField: "",
      improvementField: ""
    })
  }

  handleDateChange = (date) => {
    this.setState({
      workDate: date
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  render() {
    console.log("HOURLOG FORM: ", this.props)
    return (
      <Form error={this.props.error} success={this.props.success}>
        <Message
          error
          header='Invalid Fields'
          content='Please retry submitting the form with valid input.'
        />
        <Message
          success
          header='Thank you for submitting your hour log!'
          content='Your hours have been submitted for approval by a administrator.'
        />
        <h2>Hour Log Form</h2>
        <Form.Field>
          <label>Date Worked</label>
          <DatePicker selected={this.state.workDate} onChange={this.handleDateChange} dateFormat="LL" />
        </Form.Field>
        <Form.Input label='Hours Worked' name='hoursWorked' placeholder='Hours Worked' onChange={this.handleChange} value={this.state.hoursWorked}/>
        <Form.Input label='Supervisor' placeholder="Supervisor" name='supervisorName'  onChange={this.handleChange} value={this.state.supervisorName}/>
        <Form.Input label='Event' placeholder='Event' name='event'  onChange={this.handleChange} value={this.state.event} />
        <Form.Field>
          <label>What made you interested in volunteering with us?</label>
          <TextArea name='interestField' type='text'  onChange={this.handleChange} value={this.state.interestField}/>
        </Form.Field>
        <Form.Field>
          <label>What can we do better?</label>
          <TextArea name='improvementField' type='text' onChange={this.handleChange} value={this.state.improvementField} />
        </Form.Field>
        <Form.Field>
          <label>Additional comments?</label>
          <TextArea name='infoField' type='text' onChange={this.handleChange} value={this.state.infoField} />
        </Form.Field>
        <Button type='submit' onClick={this.handleHourLogSubmit}>Submit for Approval</Button>
      </Form>
    )
  }
};

function mapStateToProps(state) {
  return {
    error: state.hourLogError,
    success: state.hourLogSuccess
    // events: state.events
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createHourLog: (currentHourLog) => {
      dispatch(createHourLog(currentHourLog))
    },
    clearHourLogMessages: () => {
      dispatch(clearHourLogMessages())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HourLogForm);
