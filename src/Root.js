import React, {Component} from 'react'
import HomePage from './components/HomePage/HomePage'
import SignIn from './components/Auth/Sign-in'
import SignUp from './components/Auth/Sign-up'
import Wormhole from './components/Wormhole'
import {Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import store from './store'
import history from './history'


export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/auth/signIn' component={SignIn}/>
              <Route path='/auth/signUp' component={SignUp}/>

              <Route path='/*' component={Wormhole}/>
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}
