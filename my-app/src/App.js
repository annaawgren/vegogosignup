import React, {Component} from 'react'

import Header from './header.js'
import Footer from './footer.js'
import Signup from './signup.js'
import Illis from './illis.js'

import './App.css'
import './footer.css'
import './header.css'
import './signup.css'
import './illis.css'





class App extends Component {
  render() {
    return (<div className="App">

      <div>
        <Header />
      </div>

      <div id="signup">
        <Signup />
      </div>

      <div>
        <Illis />
      </div>

      <div>
        <Footer />
      </div>

    </div>)
  }
}

export default App
