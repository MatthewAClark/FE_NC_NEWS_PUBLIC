import React, { Component } from 'react'
import ArticleBody from './articleBody'
import CommentsArea from './commentsArea'
import AddComment from './addComment'


class ArticlePage extends Component {
    state = {
        articleData: [],
        commentData: []
    }

    newComment = (event) => {
        event.preventDefault()
        console.log(this.state.articleData._id)

       

                //    Use article ID to post an article
                fetch(`http://localhost:3000/api/articles/${this.state.articleData._id}/comments`, {
                    headers: new Headers({ "Content-Type": "application/json" }),
                    method: 'POST',
                    body: JSON.stringify({
                        body: this.state.inputBody
                    })
                })
                    .then(res => res.json()).then(console.log)
                    .catch(console.log)

            
    }


    componentDidMount() {

        // Display all articles on first load
       
        fetch(`http://localhost:3000/api/articles/${this.props.match.params.articleid}`)

            .then(res => {
                return res.json();
            })
            .then(article => {
              
                this.setState({ articleData: article })
                fetch(`http://localhost:3000/api/articles/${this.state.articleData._id}/comments/`)
                    .then(res => {
                        return res.json();
                    })
                    .then(comments => {

                        this.setState({ commentData: comments })

                    })
            })

        
    }

    render() {

        return (
            <div>


                <ArticleBody key={this.state.articleData._id} title={this.state.articleData.title} body={this.state.articleData.body} />
                <CommentsArea commentData={this.state.commentData} />
                <AddComment articleId={this.state.articleData._id}/>

            </div>
        )

    }

}

export default ArticlePage 