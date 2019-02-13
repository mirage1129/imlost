import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import Classrooms from './components/Classrooms'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SearchPage} />
          <Route path="/:class" component={Classrooms} />
        </div>
      </Router>
    )
  }
}

export default App
