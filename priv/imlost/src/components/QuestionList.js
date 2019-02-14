import React from 'react'
import Question from './Question'
import QuestionSubmit from './QuestionSubmit'

class QuestionList extends React.Component {
  render() {
    return (
      <div className="box">
        <h1 className="is-size-3">Questions</h1>
        <br />
        <Question />
        <Question />
        <Question />
        <QuestionSubmit />
      </div>
    )
  }
}
export default QuestionList
