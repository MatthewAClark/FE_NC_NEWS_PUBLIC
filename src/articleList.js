import React, { Component } from 'react'
import ArticleItem from './articleItem'
import Input from './input'
import api_url from "./apiConfig";

class ArticleList extends Component {
    state = {
        articleData: [],

    }


    componentDidMount() {

        //Display all articles on first load
        let fetchUrl;
        if (this.props.topicId) {
            console.log('here')
            fetchUrl = `${api_url}/api/topics/${this.props.topicId}/articles`

        } else { 
            console.log('no here')
            console.log(api_url)
            fetchUrl = `${api_url}/api/articles/`
        }
            fetch(fetchUrl)

                .then(res => {
                    return res.json();
                })
                .then(body => {
                    this.setState({ articleData: body })

                })
    }

    addPostToDOM = (newPost) => {
      this.setState({
           articleData: [...this.state.articleData, newPost]
       })
   
    }

    


    render() {
        return (
            <div>

                {this.state.articleData.map(article => {
                    return (
                        <div key={article._id}>

                            <ArticleItem article={article} addVoteUpToDOM = {this.addVoteUpToDOM}/>
                            {/* <h5><a href={"/articles/" + article._id}>{article.title}</a></h5>
                       
                        
                        <p><a href={"/topics/" + article.belongs_to._id + "/articles"}>{article.belongs_to.title}</a></p> */}
                        </div>
                    )
                })}

                <Input addPostToDOM={this.addPostToDOM} state={this.state}/>

            </div>
        )

    }
}



export default ArticleList 