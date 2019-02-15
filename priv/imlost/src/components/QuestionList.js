import React from 'react'
import { Socket } from 'phoenix'
import Question from './Question'
import QuestionSubmit from './QuestionSubmit'

class QuestionList extends React.Component {
  componentDidMount() {
    let socket = new Socket('/socket', { params: { token: window.userToken } })
    socket.connect()
    let channel = socket.channel('room:lobby', {})
    channel.join().receive('ok', response => {
      console.log('Joined successfully', response)
    })
  }

  render() {
    return (
      <div className="box">
        <h1 className="is-size-3">Questions</h1>
        <br />

        {/* <Question /> */}
        {/* <QuestionSubmit /> */}
      </div>
    )
  }
}
export default QuestionList
