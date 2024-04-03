import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import {
    Link
  } from "react-router-dom";

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
                                <Link to="/general">
                                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo"/>
                                </Link>
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
                                <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
  }
}
