import React, { Component } from 'react'

class Comments extends Component {
    state = {
        commentData: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/comments/")
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
            <h2>Articles</h2>
            {this.state.articleData.map(article => {
                return (
                    <div key={article._id}>
                        <h5><a href={article.title}>{article.title}</a></h5>
                        <p>{article.belongs_to.title}</p>
                    </div>
                )
            })}
        </div>
        )
        
    }

}

export default Articles 