import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Wormhole from '../Wormhole'
import SignIn from './Sign-in'
import SignUp from './Sign-up'
import {connect} from 'react-redux'
import Loader from '../Loader'
import {signIn, signUp, moduleName} from '../../ducks/auth'

class AuthPage extends Component {
  render() {
    const {loading} = this.props
    return (
      <div>
        <Switch>
          <Route exact path="/auth/signin" render={() => <SignIn onSubmit = {this.handleSignIn}/>}/>
          <Route exact path="/auth/signup" render={() => <SignUp onSubmit = {this.handleSignUp}/>}/>
          <Route component={Wormhole}/>
        </Switch>
        {loading && <Loader />}
      </div>
    )
  }

  handleSignIn = ({email, password}) => this.props.signIn(email, password)
  handleSignUp = ({email, password}) => this.props.signUp(email, password)
}

export default connect(state => ({
  loading: state[moduleName].loading
}), {signIn, signUp})(AuthPage)