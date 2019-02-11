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
          <div className="container has-text-centered">
            <div className="columns is-centered">
              <div className="column is-3">
                <SearchInput />
                <CreateClassInput />
              </div>
            </div>
          </div>
        </section>
      </body>
    )
  }
}
export default SearchPage
