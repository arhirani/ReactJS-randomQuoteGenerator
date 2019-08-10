import React, { Component } from "react";

class Quote extends Component {
  state = {
    data: {},
    quote: "",
    author: "",
    count: 0
  };

  componentWillMount() {
    let API =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(API)
      .then(result => result.json())
      .then(res =>
        this.setState({ data: res }, function() {
          this.fetchQuote(); //for setting the initial quote
        })
      );
  }

  fetchQuote = () => {
    let data = this.state.data.quotes;
    let a = Math.floor(Math.random() * data.length);
    let quote = data[a].quote;
    let author = data[a].author;
    this.setState({ quote, author });
  };

  render() {
    //this.fetchQuoteAPI();
    return (
      <div>
        <div>Quote: {this.state.quote}</div>
        <div>Author: {this.state.author}</div>
        <div>Count: {this.state.count}</div>
        <button onClick={this.fetchQuote}> Click me</button>
      </div>
    );
  }
}

export default Quote;
