import React, { Component } from "react";
import Input from "../input";
import Joi from "joi-browser";
// import Form from "./../common/form";
import Form from "./form";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit =  () => { console.log('tested'); };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "password", "password")}


          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Login;
