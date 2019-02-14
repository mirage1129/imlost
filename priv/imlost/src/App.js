import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import Classrooms from './components/Classrooms'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <section class="hero is-info is-fullheight">
          <div class="hero-body">
            <div class="container">
              <Route exact path="/" component={SearchPage} />
              <Route path="/:class" component={Classrooms} />
            </div>
          </div>
        </section>
      </Router>
    )
  }
}

export default App
