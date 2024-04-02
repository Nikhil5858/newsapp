import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class Navbar extends PureComponent {
  static propTypes = {}

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsApp</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    {/* <li className="nav-link" href="/">about</li>
                    <li className="nav-link" href="/">business</li>
                    <li className="nav-link" href="/">entertainment</li>
                    <li className="nav-link" href="/">general</li>
                    <li className="nav-link" href="/">health</li>
                    <li className="nav-link" href="/">technology</li>
                    <li className="nav-link" href="/">science</li>
                    <li className="nav-link" href="/">sports</li> */}
                </ul>
            </div>
            </div>
        </nav>
    )
  }
}
