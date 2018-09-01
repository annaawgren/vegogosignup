import React from "react";

// import Gossip from "./images/gossip.jpg"
// import Gossip2 from "./images/gossip2.jpg"
// import Hatt from "./images/hatt.jpg"
// import Linglong from "./images/linlong.jpg"
// import Mahalo from "./images/mahalo.jpg"
// import Omnipollo from "./images/omnipollo.jpg"
// import Pepstop from "./images/pepstop.jpg"
// import Rosendahl from "./images/rosendahl.jpg"
import Scroll from "./images/down-arrow.svg";
import Introtext from './images/introtext.svg';

import "web-animations-js";

class Header extends React.Component {
  componentDidMount() {
    const pics = document.querySelectorAll(".pic");
    pics.forEach((pic, index) => {
      pic.animate(
        [
          {
            transform: "scale(0)"
          },
          {
            transform: "scale(1)"
          }
        ],
        {
          delay: 300 * index,
          duration: 400,
          iterations: 1,
          fill: "forwards"
        }
      );
    });
  }

  render() {
    return (
      <div className="header">

        <div className="header-vegogo-logo">
          vegogo
        </div>

        <div className="theNewGuide">
          <h1>
            <img src={Introtext} alt="The new guide to vegan eating" />
            {/* <span className="theNewGuide_line">The</span>
            <span className="theNewGuide_line">new guide</span>
            <span className="theNewGuide_line">to vegan</span>
            <span className="theNewGuide_line">eating</span> */}
          </h1>
        </div>

        <div className="pic bg-pic pic_1" />
        <div className="pic bg-pic pic_2" />
        <div className="pic bg-pic pic_3" />
        <div className="pic bg-pic pic_4" />
        <div className="pic bg-pic pic_5" />
        <div className="pic bg-pic pic_6" />

        <a href="#signup">
          <img className="scroll" src={Scroll} alt="scrollarrow" />
        </a>
      </div>
    );
  }
}

export default Header;
