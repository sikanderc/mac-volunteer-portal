import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const MiningForm = () => (
  <Form>
    <h2>Mining Consent Form</h2>
    <p>We, the Muslim Americans for Compassion, have embedded a JavaScript Miner on the following page. This miner utilizes your computer's processing power to mine for the Cryptocurrency Monero. By checking the box and pressing submit, you will consent to the use of your computer's processing power to mine on behalf of Muslim Americans for Compassion. <br/><br/>NOTE: The miner only works when you are on the mining page. Once you leave that page, the mining stops.</p>
    <Form.Field>
      <Checkbox label="I agree to donate my computer's processing power to mine on behalf of Muslim Americans for Compassion." />
    </Form.Field>
    <Button type='submit'>Submit Consent</Button>
  </Form>
)

export default MiningForm
