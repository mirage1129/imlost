import React from 'react'

class QuestionSubmit extends React.Component {
  render() {
    return (
      <div>
        <form method="POST" action={'/' + this.props.classname}>
          <div className="control">
            <textarea className="textarea" name="question" type="text" placeholder="type your question" />
          </div>
          <br />
          <p className="control">
            <input className="button is-info" value="post" type="submit" />
          </p>
        </form>
      </div>
    )
  }
}
export default QuestionSubmit
