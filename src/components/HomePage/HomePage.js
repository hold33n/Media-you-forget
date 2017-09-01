import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'


class HomePage extends Component {
  render() {
    return (
      <section className="home">
        <nav>
          <div className="container">
            <div className="row">
              <div className="nav-logo">MYF</div>
              <div className="nav-controls">
                <Link to="/auth/signIn" className="nav-controls__link">Sign In</Link>
                <Link to="/auth/signUp" className="nav-controls__link nav-controls__link--blue">Sign Up</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="content container">
          <div className="row">
            <h1>Never forget what you wanted <br/>to read or watch with MYF </h1>
            <p>Add books, movies and tv shows into a reading list and keep the record of what you already watched or readed</p>
            <Link to="/auth/signUp">Get it now</Link>
          </div>
        </div>
      </section>
    )
  }
}


export default HomePage
