import React, {Component} from 'react'
import HomePage from './components/HomePage/HomePage'
import AuthPage from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Wormhole from './components/Wormhole'
import {Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import store from './redux/index'
import history from './history'


export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <ProtectedRoute path="/dashboard" component={Dashboard}/>
              <AuthPage />
              <Route component={Wormhole}/>

            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}
