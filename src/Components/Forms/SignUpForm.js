import React from 'react'
import { connect } from "react-redux";
import { signUpUser } from "../../Actions/user";
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { stateOptions, genderOptions } from './common'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './../../site/globals/site.variables'

class SignUpForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      organization: '',
      phone: '',
      address: '',
      apt: '',
      city: '',
      state: '',
      zip: '',
      dob: moment(),
      gender: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleStateChange = (event, {value}) => {
    this.setState({state: value});
  }

  handleGenderChange = (event, {value}) => {
    this.setState({gender: value});
  }

  handleDateChange = (date) => {
    this.setState({
      dob: date
    });
  }

  handleSignUpSubmit = (event) => {
    event.preventDefault()
    this.props.signUpUser({user: {first_name: this.state.firstName, last_name: this.state.lastName, organization: this.state.organization, phone: this.state.phone, address: this.state.address, apt: this.state.apt, city: this.state.city, state: this.state.state, zip: this.state.zip, dob: this.state.dob, gender: this.state.gender, email: this.state.email, password: this.state.password, password_confirmation: this.state.passwordConfirmation}});
  }

  render() {
    return (
      <div className='signup-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.signup-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 650 }}>
          <br/>
            <Header as='h2' color='blue' textAlign='center'>Sign up for an account</Header>
            <Form size='large' onSubmit={this.handleSignUpSubmit}>
              <Segment stacked>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='First name' placeholder='First name' name='firstName' type='text' onChange={this.handleChange} value={this.state.firstName} />
                  <Form.Input label='Last name' placeholder='Last name' name='lastName' type='text' onChange={this.handleChange} value={this.state.lastName} />
                </Form.Group>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='Organization/Work/School' placeholder='Organization/Work/School' name='organization' type='text' onChange={this.handleChange} value={this.state.organization} />
                  <Form.Input label='Phone Number' placeholder='Phone Number' name='phone' type='tel' onChange={this.handleChange} value={this.state.phone} />
                </Form.Group>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='Address' placeholder="Address" name='address' type='text' onChange={this.handleChange} value={this.state.address} />
                  <Form.Input label='Apartment #' placeholder='Apartment #' name='apt' type='text' onChange={this.handleChange} value={this.state.apt} />
                </Form.Group>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='City' placeholder="City" name='city' type='text' onChange={this.handleChange} value={this.state.city} />
                  <Form.Select label='State' selection options={stateOptions} placeholder="State" name='state' type='text' onChange={this.handleStateChange} />
                </Form.Group>
                <Form.Group unstackable widths={3}>
                  <Form.Input label='Zip Code' placeholder="Zip Code" name='zip' type='text' onChange={this.handleChange} value={this.state.zip} />
                  <Form.Field>
                    <label>Birthday</label>
                    <DatePicker selected={this.state.dob} onChange={this.handleDateChange} dateFormat="LL" name='dob' />
                  </Form.Field>
                  <Form.Select label='Gender' value={this.state.gender} options={genderOptions} placeholder="Gender" name='gender' type='text' onChange={this.handleGenderChange} />
                </Form.Group>
                <Form.Field>
                  <label>Email</label>
                  <input name='email' type='email' placeholder='Email' onChange={this.handleChange} value={this.state.email} />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input name="password" type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
                </Form.Field>
                <Form.Field>
                  <label>Confirm Password</label>
                  <input name="passwordConfirmation" type="password" placeholder="Confirm Password" onChange={this.handleChange} value={this.state.passwordConfirmation} />
                </Form.Field>
                <Form.Button type='submit' >Sign up</Form.Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.dataReducer
  };
};

export default connect(mapStateToProps, {
  signUpUser
})(SignUpForm);
