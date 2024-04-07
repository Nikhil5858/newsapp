import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description ,imageUrl,newsUrl,author,date} = this.props;
    const truncatedTitle = title.length > 45 ? title.slice(0, 45) + "..." : title;
    return (
      <div className="card mx-5" style={{ width: "18rem" }}>
        <img
          src={!imageUrl?"https://picsum.photos/id/5/367/267":imageUrl}
          className="card-img-top"
          alt="Title"
        />
        <div className="card-body">
          <h5 className="card-title">{truncatedTitle}</h5>
          <p className="card-text">{!description?"Description Not Defiend":description.slice(0,85)} ...</p>
          <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
