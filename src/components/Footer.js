import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-bottom bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-6 copyright">
              <p>
                Copyright &copy; News 24
                All Rights Reserved
              </p>
            </div>

            <div className="col-md-6 template-by">
              <p>
                Simple News App
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
