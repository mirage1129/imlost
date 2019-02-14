import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
class CreateClassInput extends React.Component {
  constructor() {
    super()
    this.state = {
      className: '',
      classroom: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    axios
      .post('http://localhost:4000/api/classes', {
        class: {
          name: this.state.className,
        },
      })
      .then(response => {
        console.log(response.data)
        this.setState({ classroom: response.data.class })
        this.props.history.push({
          pathname: '/' + this.state.classroom.name,
          state: { classroom: this.state.classroom },
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleClassName(event) {
    this.setState({ className: event.target.value })
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
                placeholder="Create a class"
                value={this.state.value}
                onChange={this.handleClassName.bind(this)}
              />
            </div>
            <div className="control">
              <button type="submit" value="Submit" className="button is-danger">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateClassInput)
