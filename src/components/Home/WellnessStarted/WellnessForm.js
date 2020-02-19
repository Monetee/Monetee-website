import React, { Component } from "react"
import "./_wellnessForm.scss"
import axios from "axios"
import { store as storeNotify } from "react-notifications-component"

import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const WellnessFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
})

class WellnessForm extends Component {
  state = {
    formIsSending: false,
    formIsSent: false,
    formName: "New user email",
  }

  render() {
    // dynamic class for header
    const buttonClasses = ["ui-btn", "size--normal", "theme--primary"]

    if (this.state.formIsSending) {
      buttonClasses.push("is-loading")
    }

    // encode form data
    const encode = data => {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
    }

    return (
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={WellnessFormSchema}
        onSubmit={(values, { resetForm }) => {

          // if(!this.state.formIsSending) return;

          this.setState({ formIsSending: true })
          axios
            .post(
              "/",
              encode({ "form-name": this.state.formName, ...values }),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
            )
            .then(response => {
              // console.log(response)
              storeNotify.addNotification({
                title: "Thank you!",
                message: "We got your Email",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  delay: 500,
                  duration: 5000,
                  onScreen: true,
                  pauseOnHover: true,
                },
              })
              resetForm()
              this.setState({ formIsSent: true })
            })
            .catch(err => {
              console.log(err)
              storeNotify.addNotification({
                title: "Error!",
                message: "Server error, try later.",
                type: "error",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  delay: 500,
                  duration: 5000,
                  onScreen: true,
                  pauseOnHover: true,
                },
              })
            })
            .finally(() => {
              this.setState({ formIsSending: false })
            })
        }}
      >
        {({ errors, touched }) => (
          <Form
            className="form wellness-form"
            autoComplete={"off"}
            noValidate
            data-netlify="true"
            name={this.state.formName}
          >
            <fieldset className="form__fieldset">
              <legend className="hidden">Wellness Form</legend>
              <input type="hidden" name="form-name" value="New user email" />
              <div className="form__box wellness-form__box">
                <div className="form__field-control">
                  <Field
                    name="email"
                    type="email"
                    className={`ui-input  size--normal ${
                      this.props.themeBorder
                        ? "theme--border"
                        : "theme--default"
                    } ${errors.email && touched.email ? "state--error" : ""}`}
                    placeholder="Your email address"
                    disabled={`${this.state.formIsSending || this.state.formIsSent ? "disabled" : ""}`}
                  />
                  <div className="form__field-messages">
                    {errors.email && touched.email ? (
                      <div className="form__field-messages-item">
                        {errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>
                <button
                  className={`ui-btn size--normal theme--primary ${
                    this.state.formIsSending ? "state--loading" : ""
                  } ${this.state.formIsSent ? "state--disabled" : ""}`}
                  type="submit"
                  tabIndex="0"
                  disabled={`${this.state.formIsSending || this.state.formIsSent ? "disabled" : ""}`}
                >
                  <span className="ui-btn__box" tabIndex="-1">
                    {this.props.btnLabel}
                  </span>
                </button>
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
    )
  }
}

export default WellnessForm
