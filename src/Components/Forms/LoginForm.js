import React from 'react'
import { connect } from "react-redux";
import { signInUser } from "../../Actions/user";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {Route, Link, withRouter, Redirect} from 'react-router-dom'


class LoginForm extends React.Component {
  state = {
      email: '',
      password: ''
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    let resp = this.props.signInUser({user: {email: this.state.email, password: this.state.password}})
    console.log(resp);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleSignIn = () => {
  //   AuthAdapter.login({email: this.state.email, password: this.state.password})
  //     .then((json) => this.setUser(json))
  // }

  render() {
    console.log(this.props.loginError);
    return (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
          <br/>
            <Header as='h2' color='blue' textAlign='center'>Login to your account</Header>


            <Form size='large' onSubmit={this.handleLoginSubmit} error={this.props.loginError}>
              <Segment stacked>
                <Message
                  error
                  header='Invalid Email or Password'
                  content='Please type in the correct email address or password.'
                />
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  type='email'
                  name='email'
                  onChange={this.handleChange} value={this.state.email}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name='password'
                  onChange={this.handleChange} value={this.state.password}
                />

                <Form.Button type="submit" color='yellow' fluid size='large'>Login</Form.Button>
              </Segment>
            </Form>
            <Message>
              New to us?<br/><a href='/signup'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
        { this.props.loggedIn ? <Redirect to='/'/> : null }
      </div>
    )
  }
}
// {this.props.loginError ?
//   <div className="ui negative message">
//   <i className="close icon"></i>
//   <div className="header">
//   ERROR
//   </div>
//   <p> {this.props.loginError} </p>
//   </div>
//   : null}

const mapStateToProps = state => {
  return {
    ...state.dataReducer,
    loggedIn: state.loggedIn,
    loginError: state.loginError
  };
};

export default connect(mapStateToProps, {
  signInUser
})(LoginForm);
