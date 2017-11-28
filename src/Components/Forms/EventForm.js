import React from 'react'
import { Button, TextArea, Form } from 'semantic-ui-react'

const EventForm = () => (
  <Form>
    <h2>Create an Event</h2>
    <Form.Field>
      <label>Event Name</label>
      <input name='name' type='text' placeholder='Event Name' />
    </Form.Field>
    <Form.Group unstackable widths={2}>
      <Form.Input label='Start Date' placeholder='Start Date' name='startDate' />
      <Form.Input label='End Date' placeholder='End Date' name='endDate' />
    </Form.Group>
    <Form.Group unstackable widths={2}>
      <Form.Input label='Start Time' placeholder='Start Time' name='startTime' />
      <Form.Input label='End Time' placeholder='End Time' name='endTime' />
    </Form.Group>
    <Form.Input label='Address 1' placeholder="Address 1" name='location1' />
    <Form.Input label='Address 2' placeholder='Address 2' name='location2' />
    <Form.Field>
      <label>Event Details</label>
      <TextArea name='details' type='text' placeholder='Write additional information here.' />
    </Form.Field>
    <Button type='submit'>Submit for Approval</Button>
  </Form>
)

export default EventForm
