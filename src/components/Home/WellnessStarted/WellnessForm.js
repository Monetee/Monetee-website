import React, { Component } from "react"
import "./_wellnessForm.scss"

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
  }

  render() {
    // dynamic class for header
    const buttonClasses = ["ui-btn", "size--normal", "theme--primary"]

    if (this.state.formIsSending) {
      buttonClasses.push("is-loading")
    }

    return (
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={WellnessFormSchema}
        onSubmit={values => {
          this.setState({ formIsSending: true })
          // same shape as initial values
          // console.log(values)
        }}
      >
        {({ errors, touched }) => (
          <Form className="form wellness-form" autoComplete={"off"} noValidate>
            <fieldset className="form__fieldset">
              <legend className="hidden">Wellness Form</legend>
              <div className="form__box wellness-form__box">
                <div className="form__field-control">
                  <Field
                    name="email"
                    type="email"
                    className={`ui-input  size--normal ${this.props.themeBorder?'theme--border':'theme--default'} ${errors.email && touched.email? 'state--error':''}`}
                    placeholder="Your email address"
                  />
                  <div className="form__field-messages">
                    {errors.email && touched.email ? (
                      <div className="form__field-messages-item">{errors.email}</div>
                      ) : null}
                  </div>
                </div>
                <button
                  className={`ui-btn size--normal theme--primary ${
                    this.state.formIsSending ? "state--loading" : ""
                  }`}
                  type="submit"
                  tabIndex="0"
                  disabled={`${this.state.formIsSending ? "disabled" : ""}`}
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
