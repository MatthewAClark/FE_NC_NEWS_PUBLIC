import React, { Component } from 'react';
import ArticlePage from './articlePage'
import Home from './home'
import TopicPage from './topicPage'
import { BrowserRouter, Route } from "react-router-dom";
import api_url from "./apiConfig";

class App extends Component {
  state = {
    articleData: [],
    topicId: "",
    showArticleId: ""
  }

  fetchAllArticles = () => {
    // Display all articles on first load
    console.log(api_url)
   
    fetch(`${api_url}/api/articles/`)
    
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
          <Route exact path="/articles/:articleid" component={ArticlePage} />
          <Route exact path="/topics/:topicid/articles" component={TopicPage } />

          
        </div>
      </ BrowserRouter>
    );
  }
}

export default App;
