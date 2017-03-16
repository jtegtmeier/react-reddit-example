import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  constructor(){
    this.state = {
      user: '',
      password: ''
    }
  }

  login(e) {
    e.preventDefault();

    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        console.log(err);
      })
  }

  render() {
    return (
      <form role="form">
        <div className="form-group">
          <input type="text" valueLink
        </div>
      </form>
    )
  }
}
