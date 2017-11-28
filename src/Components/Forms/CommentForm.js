import React from 'react'
import { Button, TextArea, Form } from 'semantic-ui-react'

const CommentForm = () => (
  <Form>
    <TextArea name='comment' type='text' placeholder='Write comment here.' />
    <Button type='submit'>Comment</Button>
  </Form>
)

export default CommentForm
