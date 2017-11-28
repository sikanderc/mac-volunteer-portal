import React from 'react'
import { Button, TextArea, Form } from 'semantic-ui-react'

const PostForm = () => (
  <Form>
    <Form.Field>
      <label><h2>New Post</h2></label>
      <input name='title' type='text' placeholder='Title' />
    </Form.Field>
    <Form.Field>
      <TextArea name='content' type='text' placeholder='Write post here.' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default PostForm
