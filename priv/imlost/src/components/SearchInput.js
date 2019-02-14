import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class SearchInput extends React.Component {
  constructor() {
    super()
    this.state = {
      classQuery: '',
      classroom: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    axios
      .get('http://localhost:4000/api/' + this.state.classQuery)
      .then(response => {
        this.setState({ classroom: response.data.class })
        this.props.history.push({
          pathname: '/' + this.state.classroom.name,
          state: { classroom: this.state.classroom },
        })
        console.log(this.state)
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleClassQuery(event) {
    this.setState({ classQuery: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field has-addons">
            <div className="control">
              <input
                className="input is-expanded"
                type="text"
                placeholder="Search for a class"
                value={this.state.value}
                onChange={this.handleClassQuery.bind(this)}
              />
            </div>
            <div className="control">
              <button type="submit" value="Submit" className="button is-success">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchInput)
