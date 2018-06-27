import React, { Component } from 'react'

class ArticleList extends Component {
    state = {
        articleData: [],
        
    }

    

    componentDidMount() {

        //Display all articles on first load
        
        fetch("http://localhost:3000/api/articles/")

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
            
            {this.state.articleData.map(article => {
                return (
                    <div key={article._id}>
                        <h5><a href={"/articles/"+article._id}>{article.title}</a></h5>
                        <p><a href={"/articles/"+article.belongs_to._id}>{article.belongs_to.title}</a></p>
                    </div>
                )
            })}
            
        </div>
        )
        
    }

}

export default ArticleList 