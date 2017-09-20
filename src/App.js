import React, {Component} from 'react'
import HelloWorld from './HelloWorld'
import FetchData from './FetchData'
import ObjectAssign from './ObjectAssign'

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld/>
        <hr/>
        <FetchData/>
        <hr/>
        <ObjectAssign/>
      </div>
    )
  }
}

export default App
