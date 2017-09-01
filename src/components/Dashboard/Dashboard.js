import React, {Component} from 'react'
import {signOut} from '../../ducks/auth'
import {connect} from 'react-redux'

class Dashboard extends Component {
  render() {
    const {signOut} = this.props
    return (
      <div>
        <nav>
          <ul>
            <li><button onClick = {signOut}>Sign out</button></li>
          </ul>
        </nav>
        <h1>Hi! you are in a dashboard</h1>
      </div>
    )
  }
}

export default connect(state => ({}), {signOut})(Dashboard)
