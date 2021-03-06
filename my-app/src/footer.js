import React, {Component} from 'react'

import SthlmMap from './images/sthmlmap.jpg'

class Signup extends Component {
  render() {

    return (<div className="footer">

      <div className="illis">
        <img src={SthlmMap} alt="a map illustration" />
      </div>

      <div className="footer-box">
        <div className="copyrights">
          <p>Copyright © 2018 vegogo</p>
          <p>Contact us at <a href="mailto:hello@vegogo.se">hello@vegogo.se</a></p>
          <p>Illustrations by <a href="http://www.christineroesch.de/" target="_blank" rel="noopener noreferrer">Christine Rösch</a></p>
        </div>

        <div className="vegogo-logo">
          vegogo
        </div>
      </div>

    </div>)
  }
}

export default Signup
