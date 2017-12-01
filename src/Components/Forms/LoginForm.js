import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import AuthAdapter from './../../Services/AuthAdapter'

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    isLoggedIn: false
  }

  setUser(json){
    this.setState({
      email: json.email,
      password: json.password
    })
  }

  onSignIn = (event) => {
    event.preventDefault()
    this.handleSignIn(this.state.userInput)
    this.setState({
      isLoggedIn: true
    })
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSignIn = () => {
    AuthAdapter.login({email: this.state.email, password: this.state.password})
      .then((json) => this.setUser(json))
  }

  render() {
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
            <Form size='large' onSubmit={this.onSignIn}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  type='email'
                  onChange={this.handleChange} value={this.state.email}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handlePasswordChange} value={this.state.password}
                />

                <Form.Button type="submit" color='yellow' fluid size='large'>Login</Form.Button>
              </Segment>
            </Form>
            <Message>
              New to us?<br/><a href='/signup'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default LoginForm
