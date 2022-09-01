import React, { useRef } from "react";
import Joi from "joi-browser";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Form from "../../components/sidebar/form";


class Login extends Form {
  form = React.createRef()
  state = {
    data: { fullname: "", email: "",message:''  },
    errors: {},
  };

  schema = {
    fullname: Joi.string().required().label("Fullname"),
    email: Joi.string().required().label("Email"),
    message: Joi.string().required().label("message"),
  };

  doSubmit = () => {
    emailjs
      .sendForm(
        "service_tm6vhbp",
        "template_3z1lqvk",
        this.form.current,
        "-vdSzHTq-8uRJgfl7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          console.log('there is n error');
        }
      );
    console.log("tested");
  };

  render() {
    return (
      <div className="contact">
        <h1>Cont</h1>
        <div className="row ">
          <div className="col-sm-7 contactup">
            <p className="contactPara1">Get in touch</p>
            <p className="contactPara2">Contact us for all services </p>

            
          </div>

          <div className="col-sm-7 contact1">
            <form ref = {this.form} onSubmit={this.handleSubmit}>
              {this.renderInput("fullname", "Fullname")}
              {this.renderInput("email", "Email")}
              {/* {this.renderSelect("message", "--Select your Interest--")} */}
              {this.renderTextArea("message", "Message")}
              {this.renderButton("Send")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
