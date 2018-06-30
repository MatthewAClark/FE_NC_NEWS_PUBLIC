import React, { Component } from 'react'
import ArticleBody from './articleBody'
import { Link } from "react-router-dom"

class ArticlePage extends Component {
    state = {
        articleData: [],
        topicId: "",
        articleId: ""
    }



    componentDidMount() {

        // Display all articles on first load
        console.log(this.props.match.params.articleid)
        fetch(`http://localhost:3000/api/articles/${this.props.match.params.articleid}`)

            .then(res => {
                return res.json();
            })
            .then(body => {
                 this.setState({ articleData: body })
           
            })

        
    }

    render () {
        return (
            <div>
            

<ArticleBody key={this.state.articleData._id} title={this.state.articleData.title} body={this.state.articleData.body} />
             
        </div>
        )
        
    }

}

export default ArticlePage 