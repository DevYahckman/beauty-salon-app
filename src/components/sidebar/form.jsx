import React, { Component } from "react";
import Joi from "joi-browser";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Input from "./../input";
import TextArea from "./textArea";
import Select from "./select";
class Form extends Component {
  state = {
    data: {},
    errors: {},
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
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input] = errorMessage;
    else delete errors[input.name];

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

  renderButton(label) {
    return (
      <button className="btn btn-primary" disabled={this.validate()}>
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        onChange={this.handleChange}
        error={errors[name]}
        value={data[name]}
        name={name}
        label={label}
        type={type}
      />
    );
  }
  renderTextArea(name, label) {
    const { data, errors } = this.state;
    return (
      <TextArea
        onChange={this.handleChange}
        error={errors[name]}
        value={data[name]}
        name={name}
        label={label}
      />
    );
  }

  renderSelect(name, label) {
    const { data, errors } = this.state;
    return (
      <Select
        onChange={this.handleChange}
        error={errors[name]}
        value={data[name]}
        name={name}
        label={label}
      />
    );
  }
  renderLogo(icon) {
    return (
      <MDBBtn
        className="m-1 btn"
        floating
        style={{ backgroundColor: "#dd4b39" }}
        href="#"
      >
        <MDBIcon fab icon={icon} />
      </MDBBtn>
    );
  }
}

export default Form;
