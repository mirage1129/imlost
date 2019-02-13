import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class SearchInput extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      toClassroom: false,
      classroom: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    //add API request
  }

  handleSubmit(event) {
    event.preventDefault()
    axios
      .get('http://localhost:4000/api/' + this.state.name)
      .then(response => {
        this.setState({ classroom: response.data.class })
        console.log(this.state)
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleName(event) {
    this.setState({ name: event.target.value })
  }

  render() {
    // if (this.state.toClassroom === true) {
    //   // <Redirect to={'/' + this.state.name} />
    // }

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input is-expanded"
              type="text"
              placeholder="Find a class"
              value={this.state.value}
              onChange={this.handleName.bind(this)}
            />
          </div>
          <div className="control">
            <button type="submit" value="Submit" className="button is-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}
export default SearchInput
