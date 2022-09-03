import React from "react";
import Form from "../../components/sidebar/form";
import emailjs from "@emailjs/browser";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import "./book.css";

class book extends Form {
  form = React.createRef();
  state = {
    data: {
      fullname: "",
      email: "",
      number: "",
      address: "",
      date: "",
      time: "",
      service: "",
    },
    errors: {},
  };
  schema = {
    fullname: Joi.string().required().label("Fullname"),
    email: Joi.string().required().label("E-mail"),
    number: Joi.string().required().label("Number"),
    address: Joi.string().required().label("Address"),
    date: Joi.string().required().label("Date"),
    time: Joi.string().required().label("Time"),
    service: Joi.string().required().label("Service"),
  };

  doSubmit = () => {
    emailjs
      .sendForm(
        "service_tm6vhbp",
        "template_m4wttlg",
        this.form.current,
        "-vdSzHTq-8uRJgfl7"
      )
      .then(
        (result) => {
          toast.success("Email sent");
        },
        (error) => {
          console.log(error.text);
          toast.error("there is an error");
        }
      );
    console.log("booked");
  };
  render() {
    return (
      <div className="book">
        <h1>Book</h1>

        <div className="col-sm-8 bookM">
          <p className="bookpara1">Contact Us</p> <hr />
          <form ref={this.form} onSubmit={this.handleSubmit}>
            {this.renderInput("fullname", "Fullname")}
            {this.renderInput("email", "E-mail", "email")}
            {this.renderInput("number", "Phone Number", "number")}
            {this.renderTextArea("address", "Address")}
            {this.renderSelect("service", "Service")}
            {this.renderInput("date", "Date", "date")}
            {this.renderInput("time", "Time", "time")}

            {this.renderButton("Book")}
          </form>
        </div>
      </div>
    );
  }
}

export default book;
