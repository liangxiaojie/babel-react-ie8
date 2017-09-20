import React, {Component} from 'react'

class FetchData extends Component {
  consturctor() {
    this.state = {}
  }
  componentWillMount() {
    fetch('data.json')
    .then(res => res.json())
    .then(res => {
      this.setState(res);
    });
  }
  render() {
    return (
      <div>
        <h1>Fetching data.json</h1>
        <pre>
          <code>
            {JSON.stringify(this.state, null, 2)}
          </code>
        </pre>
      </div>
    )
  }
}

export default FetchData
