import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./../input";
class Form extends Component {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Do somehing
    console.log("submitted");
  };

  
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input] = errorMessage;
    else delete errors[input.name];
    console.log(errors)
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  render() {
    const { errors, data } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            error={errors.username}
            name="username"
            label="Username"
            value={data.username}
          />
          <Input
            onChange={this.handleChange}
            error={errors.password}
            value={data.password}
            name="password"
            label="Password"
            type="password"
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
