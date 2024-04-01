import React, { Component } from "react";
import loading from "../loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="spinner-container mb-3">
        <img src={loading} className="spinner-img" alt="loading" />
      </div>
    );
  }
}
