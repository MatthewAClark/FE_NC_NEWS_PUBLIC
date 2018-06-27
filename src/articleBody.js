import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Article extends Component {
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
            <h2>Article</h2>

             <div key={this.state.articleData._id}>
                        <h2>{this.state.articleData.title}</h2>
                        <p>{this.state.articleData.body}</p>
                    </div>
        </div>
        )
        
    }

}

export default Article 