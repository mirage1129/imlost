import React from 'react'
import { Socket } from 'phoenix'
import Question from './Question'
import QuestionSubmit from './QuestionSubmit'

class QuestionList extends React.Component {
  constructor() {
    super()
    this.state = {
      inputMessage: '',
    }
  }

  componentDidMount() {
    let socket = new Socket('/socket', { params: { token: window.userToken } })
    socket.connect()
    let channel = socket.channel('class:lobby', {})
    channel.join().receive('ok', response => {
      console.log('Joined successfully', response)
    })
  }

  handleInputMessage(event) {
    this.setState({
      inputMessage: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.inputMessage)
  }

  render() {
    return (
      <div className="box">
        <h1 className="is-size-3">Questions</h1>
        <br />

        {/* TESTING */}

        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="field">
              <label
                className="label"
                style={{
                  textAlign: 'left',
                }}
              >
                GenericUsername:
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  style={{
                    marginTop: '10px',
                  }}
                  value={this.state.inputMessage}
                  onChange={this.handleInputMessage.bind(this)}
                />
              </div>
            </div>
            <button
              type="submit"
              value="Submit"
              className="button is-primary"
              style={{
                marginTop: '10px',
              }}
            >
              Submit
            </button>
          </form>
        </div>

        {/* TESTING */}

        {/* <Question /> */}
        {/* <QuestionSubmit /> */}
      </div>
    )
  }
}
export default QuestionList
