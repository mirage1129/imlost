import React from 'react'
import QuestionList from './QuestionList'

class Classrooms extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentWillMount() {
    //add API request
    console.log(this.props.location.state)
  }

  render() {
    const classroomName = this.props.location.state.classroom.name
    const classroomId = this.props.location.state.classroom.id

    return (
      <div>
        <div className="columns is-vcentered">
          <div className="column is-4 is-offset-2">
            <figure className="image">
              <div className="lostbutton green" />
            </figure>
          </div>
          <div className="column">
            <QuestionList classroomName={classroomName} classroomId={classroomId} />
          </div>
        </div>
      </div>
    )
  }
}
export default Classrooms
