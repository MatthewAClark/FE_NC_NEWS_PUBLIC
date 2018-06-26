import React, { Component } from 'react'

class Articles extends Component {
    state = {
        articleData: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/articles/")
            .then(res => {
                return res.json();
            })
            .then(body => {
                 this.setState({ articleData: body })
            console.log(body)
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
                        
                    </div>
                )
            })}
        </div>
        )
        
    }

}

export default Articles 