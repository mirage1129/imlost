import React from 'react'

class Classrooms extends React.Component {
  componentWillMount() {
    //add API request
  }
  render() {
    //create an input for search
    return <div>{this.props.location.state.classroom.name}</div>
  }
}
export default Classrooms
