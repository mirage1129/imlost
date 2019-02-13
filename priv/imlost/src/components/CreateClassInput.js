import React from 'react'
import axios from 'axios'
class CreateClassInput extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    //   console.log(this.state)
    // }

    axios.post('http://localhost:4000/api/classes', {
      headers: { 'Content-Type': 'application/json' },
      class: {
        name: this.state.name,
      },
    })
  }

  handleName(event) {
    this.setState({ name: event.target.value })
  }

  render() {
    //create an input for search
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input is-expanded"
              type="text"
              placeholder="Create a class"
              value={this.state.value}
              onChange={this.handleName.bind(this)}
            />
          </div>
          <div className="control">
            <button type="submit" value="Create" className="button is-primary">
              Create
            </button>
          </div>
        </div>
      </form>
    )
  }
}
export default CreateClassInput
