import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const ApproveEventForm = () => (
  <Form>
    <Form.Field>
      <label>Email</label>
      <input name='email' type='text' placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input name="password" type="password" placeholder="Password"/>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default ApproveEventForm
