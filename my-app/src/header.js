import React from "react";

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
          </h1>
        </div>

        <div className="pic bg-pic pic_1" />
        <div className="pic bg-pic pic_2" />
        <div className="pic bg-pic pic_3" />
        <div className="pic bg-pic pic_4" />
        <div className="pic bg-pic pic_5" />

        <a href="#signup" className="scrollArrow">
          <img className="scrollArrow__img" src={Scroll} alt="scrollarrow" />
        </a>
      </div>
    );
  }
}

export default Header;
