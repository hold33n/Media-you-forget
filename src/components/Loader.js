import React, {Component} from 'react'

class Loader extends Component {
  render() {
    return (
      <div className="loader-overlay">
        <div className="loader-wrap">
          <div className="loader loader2">
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Loader
