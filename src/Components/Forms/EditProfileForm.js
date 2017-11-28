import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { stateOptions, genderOptions } from './common'

const EditProfileForm = () => (
  <Form>
    <h2>Edit Profile</h2>
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
    <Button type='submit'>Submit</Button>
  </Form>
)

export default EditProfileForm
