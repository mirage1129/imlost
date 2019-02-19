import React from 'react'
import { Socket } from 'phoenix'
import Question from './Question'
import QuestionSubmit from './QuestionSubmit'

class QuestionList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputQuestion: '',
      questions: [],
    }

    let socket = new Socket('/socket', { params: { token: window.userToken } })
    socket.connect()
    let channelClassId = this.props.classroomId
    if (channelClassId) {
      this.channel = socket.channel(`class:${channelClassId}`, {})
    }
  }

  componentDidMount() {
    let channelClassId = this.props.classroomId
    if (channelClassId) {
      this.channel.join().receive('ok', response => {
        console.log('Joined successfully', response)
        // console.log(this.props.classroomId)
      })
      this.channel.on(`class:${channelClassId}:new_msg`, payload => {
        this.setState({
          questions: this.state.questions.concat(payload.body),
        })
      })
    }
  }

  handleInputQuestion(event) {
    this.setState({
      inputQuestion: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let channelClassId = this.props.classroomId
    if (channelClassId) {
      this.channel.push('new_msg', { body: this.state.inputQuestion })
      this.setState({
        inputQuestion: '',
      })
    }
  }

  render() {
    const questions = this.state.questions.map((question, index) => {
      return <Question key={index} message={question} />
    })

    return (
      <div className="box">
        <h1 className="is-size-3">Questions</h1>
        <h1 className="is-size-3">{this.props.classroomName}</h1>
        <br />

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
            {questions}
          </div>
        </div>
        {/* <QuestionSubmit /> */}
      </div>
    )
  }
}
export default QuestionList
