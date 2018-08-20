import React from "react"

import Gossip from "./images/gossip.jpg"
import Gossip2 from "./images/gossip2.jpg"
import Hatt from "./images/hatt.jpg"
import Linglong from "./images/linlong.jpg"
import Mahalo from "./images/mahalo.jpg"
import Omnipollo from "./images/omnipollo.jpg"
import Pepstop from "./images/pepstop.jpg"
import Rosendahl from "./images/rosendahl.jpg"




class Header extends React.Component {

	constructor(props) {
  	super(props)
    this.backgrounds = [Gossip, Gossip2, Hatt, Linglong, Mahalo, Omnipollo, Pepstop, Rosendahl]
    this.state = { backgroundIndex: 0 }

		this.changeImg = this.changeImg.bind(this)
  }

  componentDidMount () {
		setInterval(this.changeImg, 900)
  }

	changeImg () {
		let bgImgIndex = this.state.backgroundIndex + 1
		console.log(bgImgIndex)
		console.log(this.backgrounds.length)
		if(bgImgIndex >= this.backgrounds.length) {
			bgImgIndex = 0
		}
		this.setState({ backgroundIndex: bgImgIndex })
	}


  render () {
    return (
      <div className="header">


        <img className="video" src={ this.backgrounds[this.state.backgroundIndex] } />
      </div>
    )
  }
}



export default Header
