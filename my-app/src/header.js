import React from "react"

import Gossip from "./images/gossip.jpg"
import Gossip2 from "./images/gossip2.jpg"
import Hatt from "./images/hatt.jpg"
import Linglong from "./images/linlong.jpg"
import Mahalo from "./images/mahalo.jpg"
import Omnipollo from "./images/omnipollo.jpg"
import Pepstop from "./images/pepstop.jpg"
import Rosendahl from "./images/rosendahl.jpg"
import Scroll from "./images/down-arrow.svg"

class Header extends React.Component {


  // constructor(props) {
  //   super(props) {
  //     this.state = {
  //       picsVisible = false
  //     }
  //   }
  // }
  //
  // handlepicsVisible = () => {
  // this.setState({ picsVisible: !this.state.picsVisible })
  // }

  componentDidMount() {

    const pics = document.querySelectorAll('.pic')
    pics.forEach((pic, index) => {
      pic.animate([
        {
          transform: 'scale(0)'
        }, {
          transform: 'scale(1)'
        }
      ], {
        delay: 300 * index,
        duration: 400,
        iterations: 1
      })
    })

  }

  render() {
    return (<div className="header">

      <div className="theNewGuide">
        <h1>
          The new guide
          <br/>
          to vegan eating
        </h1>
      </div>

      <div className="pic bg-pic"/>
      <div className="pic bg-pic"/>
      <div className="pic bg-pic"/>
      <div className="pic bg-pic"/>
      <div className="pic bg-pic"/>
      <div className="pic bg-pic"/>

      <a href="#signup">
        <img className="scroll" src={Scroll} alt="scrollarrow"/>
      </a>
    </div>)
  }
}

export default Header
