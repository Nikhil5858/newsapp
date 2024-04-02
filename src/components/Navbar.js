import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class Navbar extends PureComponent {
  static propTypes = {}

  render() {
    return (
        <>
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4">
                            <div className="logo">
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <div className="search">
                                <input type="text" placeholder="Search"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">General</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Technology</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Sports</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
  }
}
