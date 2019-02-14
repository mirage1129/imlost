import React from 'react'
import SearchInput from './SearchInput'
import CreateClassInput from './CreateClassInput'

class SearchPage extends React.Component {
  render() {
    return (
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-3">
            <SearchInput />
            <br />
            <CreateClassInput />
          </div>
        </div>
      </div>
    )
  }
}
export default SearchPage
