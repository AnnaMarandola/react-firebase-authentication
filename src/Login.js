import React, { Component } from 'react';
import fire from './config/fire';

class Login extends Component {
  constructor(props)
  {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.state = {
      email : "",
      password : ""
    }

  }

login(e) {
  e.preventDefault();
  fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    console.log(u)
  }).catch((err) => {
    console.log(err);
  })
}

signUp(e){
  e.preventDefault();
  fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    console.log(u)
  }).catch((err) => {
    console.log(err)
  })
}

handleChange(e){
  this.setState({
    [e.target.name] : e.target.value
  })
}

  render()
  {
    return(
      <div>
        <form>
          <input
          type = "email"
          name = "email"
          id = "email"
          placeholder ="enter email address"
          onChange = {this.handleChange}
          value ={this.state.email}
          />
          <input
          type = "password"
          name = "password"
          id = "password"
          placeholder = "enter password"
          onChange = { this.handleChange}
          value = {this.state.password}
          />
          <button onClick  = {this.login}>Login</button>
          <button onClick  = {this.signUp}>Signup</button>

        </form>
      </div>
    )
  }
}

export default Login;