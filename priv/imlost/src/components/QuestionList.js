import React from 'react'
import { Socket } from 'phoenix'
import Question from './Question'
import QuestionSubmit from './QuestionSubmit'

class QuestionList extends React.Component {
  constructor() {
    super()
    this.state = {
      inputQuestion: '',
      userQuestions: [],
      serverQuestions: [],
    }

    let socket = new Socket('/socket', { params: { token: window.userToken } })
    socket.connect()
    this.channel = socket.channel('class:lobby', {})
  }

  componentDidMount() {
    this.channel.join().receive('ok', response => {
      console.log('Joined successfully', response)
    })
    this.channel.on('new_msg', payload => {
      console.log(payload)
      this.setState({
        serverQuestions: this.state.serverQuestions.concat(payload.body),
      })
    })
  }

  handleInputQuestion(event) {
    this.setState({
      inputQuestion: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.channel.push('new_msg', { body: this.state.inputQuestion })
    this.setState({
      userQuestions: this.state.userQuestions.concat(this.state.inputQuestion),
      inputQuestion: '',
    })
  }

  render() {
    const userQuestions = this.state.userQuestions.map((message, index) => <Question key={index} message={message} />)

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
                  value={this.state.inputQuestion}
                  onChange={this.handleInputQuestion.bind(this)}
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
          <div
            className="flex-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flexStart',
              justifyContent: 'flexStart',
              margin: 'auto',
              width: '100%',
            }}
          >
            {userQuestions}
          </div>
        </div>

        {/* TESTING */}

        {/* <Question /> */}
        {/* <QuestionSubmit /> */}
      </div>
    )
  }
}
export default QuestionList
