import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import emailValidator from 'email-validator'
import InputField from './InputField'

class SignUp extends Component {
  render() {
    const {handleSubmit} = this.props

    return (
      <section className="auth">
        <div className="auth-card">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit} autoComplete="off">
            <Field name="email" component={InputField}/>
            <Field name="password" component={InputField} type="password"/>
            <div className="input-field">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </section>
    )
  }
}



const validate = ({email, password}) => {
  const errors = {}

  if (!email) errors.email = 'E-mail is required'
  else if (!emailValidator.validate(email)) errors.email = 'Invalid email'

  if (!password) errors.password = 'Password is required'
  else if (password.length < 8) errors.password = 'Password is to short'

  return errors
}


export default reduxForm({
  form: 'sign-up',
  validate
})(SignUp)
