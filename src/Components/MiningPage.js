import React from 'react'
import './MiningPage.css'

class MiningPage extends React.Component {

  componentWillMount () {
    const script = document.createElement("script");

    script.src = "https://authedmine.com/lib/simple-ui.min.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
      <br/><br/>  <br/><br/>  <br/><br/>
      <div className="coinhive-miner"
        data-key="AczAYyZATpK635kyQ2vWTQchAcXBRmti">
        <em>Loading...</em>
      </div>
      </div>
    )
  }
}

export default MiningPage
