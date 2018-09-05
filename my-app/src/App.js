import React, {Component} from "react";
import ReactGA from 'react-ga';

import Header from "./header.js";
import Footer from "./footer.js";
import Signup from "./signup.js";

import "./App.css";
import "./footer.css";
import "./header.css";
import "./signup.css";

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-181460-40');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div className="App">
        <Header className="parallax"/>
        <Signup/>
        <Footer/>
    </div>)

  }
}

export default App;
