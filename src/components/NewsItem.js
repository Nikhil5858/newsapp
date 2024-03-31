import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description ,imageUrl,newsUrl} = this.props;
    const truncatedTitle = title.length > 45 ? title.slice(0, 45) + "..." : title;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="Title"
        />
        <div className="card-body">
          <h5 className="card-title">{truncatedTitle}</h5>
          <p className="card-text">{description} ...</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
