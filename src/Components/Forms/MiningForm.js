import React from 'react'
import { connect } from "react-redux";
import { Segment, Button, Checkbox, Form } from 'semantic-ui-react'
import { makeAMiner } from "../../Actions/user";

class MiningForm extends React.Component {
  state = {
    miner: ""
  }

  handleConsentSubmit = (event) => {
    event.preventDefault()
    this.props.makeAMiner({user: {miner: this.state.miner}});
  }

  handleChange = (event) => {
    this.setState({
      miner: event.target.value
    })
  }

  render() {
    return (
      <div className="main-container">
      <div className="empty-container"></div>
        <div className="content-container">
        <br/><br/>  <br/><br/>
          <div className="mission-container">
            <Segment.Group raised>
              <Segment color='blue' size={'big'}>
                Mining Consent Form
              </Segment>
              <Segment>
                We, the Muslim Americans for Compassion, have embedded a JavaScript Miner on the following page. This miner utilizes your computer's processing power to mine for the Cryptocurrency Monero. By checking the box and pressing submit, you will consent to the use of your computer's processing power to mine on behalf of Muslim Americans for Compassion. <br/><br/>NOTE: The miner only works when you are on the mining page. Once you leave that page, the mining stops.
              </Segment>
              <Segment>
                <Checkbox label="I agree to donate my computer's processing power to mine for Cryptocurrency on behalf of Muslim Americans for Compassion." onChange={this.handleChange}/>
              </Segment>
              <Button type='submit' onSubmit={this.handleConsentSubmit}>Submit Consent</Button>
            </Segment.Group>
          </div>
        </div>
        <div className="empty-container"></div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    ...state.dataReducer,
    miner: state.miner
  };
};

export default connect(mapStateToProps, {
  makeAMiner
})(MiningForm);

// <Form>
// <h2>Mining Consent Form</h2>
// <p>We, the Muslim Americans for Compassion, have embedded a JavaScript Miner on the following page. This miner utilizes your computer's processing power to mine for the Cryptocurrency Monero. By checking the box and pressing submit, you will consent to the use of your computer's processing power to mine on behalf of Muslim Americans for Compassion. <br/><br/>NOTE: The miner only works when you are on the mining page. Once you leave that page, the mining stops.</p>
// <Form.Field>
// <Checkbox label="I agree to donate my computer's processing power to mine on behalf of Muslim Americans for Compassion." />
// </Form.Field>
// <Button type='submit'>Submit Consent</Button>
// </Form>
