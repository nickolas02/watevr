import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
  }
  componentDidMount() {
    axios.get('https://nndecker.dev/js/k.json')
      .then(response => {
      console.log(response.data);
      this.setState({lists: response.data})
    })
  }
  render() {
    return(
      <div>
        {this.state.lists.map((list) => {
          return(
            <div key={list.id}>
              <pre>
                <h1>{JSON.stringify(list)}</h1>
              </pre>
            </div>
          )
        })}
      </div>
    )
  }

}

export default App;