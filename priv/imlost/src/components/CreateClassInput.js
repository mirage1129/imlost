import React from 'react'
class CreateClassInput extends React.Component {
  componentWillMount() {
    //add API request
  }
  render() {
    //create an input for search
    return (
      <div className="field has-addons">
        <div className="control">
          <input className="input is-expanded" type="text" placeholder="Create a class" />
        </div>
        <div className="control">
          <a className="button is-info">Create</a>
        </div>
      </div>
    )
  }
}
export default CreateClassInput
