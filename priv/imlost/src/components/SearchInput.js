import React from 'react'
class SearchInput extends React.Component {
  componentWillMount() {
    //add API request
  }
  render() {
    //create an input for search
    return (
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Find a class" />
        </div>
        <div className="control">
          <a className="button is-info">Search</a>
        </div>
      </div>
    )
  }
}
export default SearchInput
