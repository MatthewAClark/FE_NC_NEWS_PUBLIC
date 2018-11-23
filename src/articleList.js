import React, { Component } from 'react'
import ArticleItem from './articleItem'
import Input from './input'
import api_url from "./apiConfig";

class ArticleList extends Component {
    state = {
        articleData: [],

    }


    componentDidMount() {
        console.log('in component did mount')
        //Display all articles on first load
        let fetchUrl;
        if (this.props.topicId) {
            
            fetchUrl = `${api_url}/api/topics/${this.props.topicId}/articles`

        } else {             
            fetchUrl = `${api_url}/api/articles/`
        }
            fetch(fetchUrl)

                .then(res => {
                    return res.json();
                })
                .then(body => {
                    body = body.reverse()
                    this.setState({ articleData: body })
                    console.log('here is body', body)
                })
               
    }

    addPostToDOM = (newPost) => {
      this.setState({
           articleData: [newPost, ...this.state.articleData ]
       })
   
    }

    


    render() {
        return (
            <div >
               

                {this.state.articleData.map(article => {
                    return (

                        <div key={article._id}>

                            <ArticleItem article={article} addVoteUpToDOM = {this.addVoteUpToDOM}/>
                       
                        </div>
                    )
                })}

                 <div><Input addPostToDOM={this.addPostToDOM} state={this.state}/></div>

            </div>
        )

    }
}



export default ArticleList 