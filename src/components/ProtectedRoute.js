import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {moduleName} from '../ducks/auth'
import Wormhole from './Wormhole'

class ProtectedRoute extends Component {
  render() {
    const {component, ...rest} = this.props
    return <Route {...rest} render={this.renderProtected}/>
  }

  renderProtected = (routeProps) => {
    const {component: ProtectedComponent, authorized} = this.props
    return authorized ? <ProtectedComponent {...routeProps}/> : <Wormhole />
  }
}

export default connect(state => ({
  authorized: !!state[moduleName].user
}), null, null, {pure: false})(ProtectedRoute)