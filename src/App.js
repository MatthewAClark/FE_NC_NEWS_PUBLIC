import React, { Component } from 'react';
import Article from './articles'
import Home from './home'
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  state = {
    articleData: [],
    topicId: "",
    showArticleId: ""
  }

  fetchAllArticles = () => {
    // Display all articles on first load
   
    fetch("http://localhost:3000/api/articles/")

      .then(res => {
        return res.json();
      })
      .then(body => {
        this.setState({ articleData: body })

      })
  }

  showArticle = (articleId) => {
    this.setState({
      showArticleId: articleId
    })
  }

  render() {
    return (
      < BrowserRouter>
        <div>
          <header>
            <h1>Northcoders News</h1>
          </header>


          <Route exact path="/" component={Home} showArticle={this.showArticle} fetchAllArticles={this.fetchAllArticles} />
          <Route exact path="/articles/:articleid" component={Article} />

          
        </div>
      </ BrowserRouter>
    );
  }
}

export default App;
