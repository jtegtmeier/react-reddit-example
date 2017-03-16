import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './Header'
import MainPage from './MainPage'
import CreateAccount from './CreateAccount'
import './App.css'

const App = () =>
  <Router>
    <div>
      <Header/>
      <Route exact path="/" component={MainPage}></Route>
      <Route path="/createaccount" component={CreateAccount}></Route>
    </div>
  </Router>

export default App
