import React from 'react'
import QuestionList from './QuestionList'

class Classrooms extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'wyoming',
      classroom: '',
    }
  }
  componentWillMount() {
    //add API request
  }
  render() {
    //create an input for search
    return (
      <div>
        <div className="columns is-vcentered">
          <div className="column is-4 is-offset-2">
            <figure className="image">
              <div className="lostbutton green" />
            </figure>
          </div>
          <div className="column">
            <QuestionList />
          </div>
        </div>
      </div>
    )
  }
}
export default Classrooms
