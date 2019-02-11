import React from 'react'
import SearchInput from './SearchInput'
import CreateClassInput from './CreateClassInput'

class SearchPage extends React.Component {
  componentWillMount() {
    //add API request
  }
  render() {
    //create an input for search
    return (
      <body>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <h2 className="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one you're currently
              reading
            </h2>
          </div>
          <SearchInput />
          <CreateClassInput />
        </section>
      </body>
    )
  }
}
export default SearchPage
