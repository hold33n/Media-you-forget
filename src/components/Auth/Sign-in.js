import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form'

class SignInForm extends Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <section className="auth">
        <div className="auth-card">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <Field name="email" id="email" component="input" />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <Field name="password" id="password" component="input" type="password"/>
            </div>
            <div className="input-field">
              <input type="submit" value="Sign in" />
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default reduxForm({
  form: 'sign-in'
})(SignInForm)