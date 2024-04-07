import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {

  static desfaultProps = {
      country:'in',
      pageSize:6,
      category:'general'
  }

  static propsType = {
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string
  }

  capitalFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading:false,
      page: 1,
    };
    document.title = `${this.capitalFirstLetter(this.props.category)} - News 24`;
  }

  async updateNews(){
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b51a52573984662bd24def37e605e55&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  onPreviousbtnclick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b51a52573984662bd24def37e605e55&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading:false
    // });
    this.setState({page : this.state.page - 1});
    this.updateNews();
  };

  onNextbtnclick = async () => {
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b51a52573984662bd24def37e605e55&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data = await fetch(url);
      // let parsedData = await data.json();

      // this.setState({
      //   page: this.state.page + 1,
      //   articles: parsedData.articles,
      //   loading:false
      // });
      this.setState({page : this.state.page + 1});
      this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h3 className="text-center mb-4">{this.capitalFirstLetter(this.props.category)} - News 24</h3>
        {this.state.loading && <Spinner/>}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {!this.state.loading && this.state.articles.map((element, index) => (
            <div className="col" key={index}>
              <NewsItem
                title={element.title}
                imageUrl={element.urlToImage}
                description={element.description}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.onPreviousbtnclick}
            className="btn btn-dark me-2"
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)}
            type="button"
            onClick={this.onNextbtnclick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
