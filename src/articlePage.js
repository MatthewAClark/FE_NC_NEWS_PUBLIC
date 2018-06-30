import React, { Component } from 'react'
import ArticleBody from './articleBody'
import Comments from './comments'


class ArticlePage extends Component {
    state = {
        articleData: [],
        commentData: []
    }



    componentDidMount() {

        // Display all articles on first load
        console.log(this.props.match.params.articleid)
        fetch(`http://localhost:3000/api/articles/${this.props.match.params.articleid}`)

            .then(res => {
                return res.json();
            })
            .then(article => {
                console.log('Art data id', this.state.articleData._id)
                this.setState({ articleData: article })
                fetch(`http://localhost:3000/api/articles/${this.state.articleData._id}/comments/`)
                    .then(res => {
                        return res.json();
                    })
                    .then(comments => {

                        this.setState({ commentData: comments })

                    })
            })

        console.log('articleData before comments', this.state.articleData)
    }

    render() {

        return (
            <div>


                <ArticleBody key={this.state.articleData._id} title={this.state.articleData.title} body={this.state.articleData.body} />
                <Comments commentData={this.state.commentData} />

            </div>
        )

    }

}

export default ArticlePage 