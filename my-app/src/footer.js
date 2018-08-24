import React, {Component} from 'react'

import Map from './images/intromap.jpg'

class Signup extends Component {
  render() {

    return (<div className="footer">

      <div className="illis">
        <img src={Map} alt="a map illustration"/>
      </div>

      <div className="copyrights">
        <p>Copyright © 2018 vegogo</p>
        <p>Contact us at
          <a href="mailto:hello@vegogo.se">hello@vegogo.se</a>
        </p>
        <p>Illustrations by<a href="http://www.christineroesch.de/" target="blank">Christine Rösch</a>
        </p>
      </div>

      <div className="vegogo-logo">
        vegogo
      </div>

    </div>)
  }
}

export default Signup
