import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { stateOptions, genderOptions } from './common'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './../../site/globals/site.variables'


class SignUpForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dob: moment()
    };
  }

  handleChange = (date) => {
    this.setState({
      dob: date
    });
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
            <Form size='large'>
              <Segment stacked>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='First name' placeholder='First name' name='firstName' />
                  <Form.Input label='Last name' placeholder='Last name' name='lastName' />
                </Form.Group>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='Organization/Work/School' placeholder='Organization/Work/School' name='organization' />
                  <Form.Input label='Phone Number' placeholder='Phone Number' name='phone' type='tel' />
                </Form.Group>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='Address' placeholder="Address" name='address' />
                  <Form.Input label='Apartment #' placeholder='Apartment #' name='apt' />
                </Form.Group>
                <Form.Group unstackable widths={3}>
                  <Form.Input label='City' placeholder="City" name='city' />
                  <Form.Select label='State' options={stateOptions} placeholder="State" name='state' />
                  <Form.Input label='Zip Code' placeholder="Zip Code" name='zip' />
                </Form.Group>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='Birthday' placeholder="Birthday" name='dob' />
                  <Form.Field>
                    <label>Birthday</label>
                    <DatePicker selected={this.state.dob} onChange={this.handleChange} dateFormat="LL" />
                  </Form.Field>
                  <Form.Select label='Gender' options={genderOptions} placeholder="Gender" name='gender' />
                </Form.Group>
                <Form.Field>
                  <label>Email</label>
                  <input name='email' type='email' placeholder='Email' />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input name="password" type="password" placeholder="Password"/>
                </Form.Field>
                <Form.Field>
                  <label>Confirm Password</label>
                  <input name="passwordConfirmation" type="password" placeholder="Confirm Password"/>
                </Form.Field>
                <Button type='submit'>Sign up</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default SignUpForm
