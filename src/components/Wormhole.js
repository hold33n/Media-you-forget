import React from 'react'
import {Link} from 'react-router-dom'

//Project link: <a>See project</a>
//<span className="coming-soon">Coming Soon</span>

const Wormhole = () =>
  <section className="wormhole">
    <div className="container">
      <div className="row">
        <h1>You got lost.</h1>
        <p>Go to <Link to="/auth/signin">sign in</Link></p>
      </div>
    </div>
  </section>


export default Wormhole
