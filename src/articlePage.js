import React, { Component } from 'react'
import ArticleBody from './articleBody'
import CommentsArea from './commentsArea'
import AddComment from './addComment'


class ArticlePage extends Component {
    state = {
        articleData: [],
        commentData: []
    }

    addCommentToDOM = (newComment) => {
        
       
      this.setState({
           commentData: [ ...this.state.commentData, newComment ]
       })
   
    }

    removeCommentFromDOM = (index) => {
        const copyArray = [...this.state.commentData]
       
         copyArray.splice(index, 1)
        
       
      this.setState({
           commentData: copyArray
       })
   
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
                <CommentsArea commentData={this.state.commentData} removeCommentFromDOM={this.removeCommentFromDOM}/>
                <AddComment articleId={this.state.articleData._id} addCommentToDOM={this.addCommentToDOM}/>

            </div>
        )

    }

}

export default ArticlePage 