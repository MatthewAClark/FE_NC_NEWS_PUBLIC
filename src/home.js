import React, { Component } from 'react'
import ArticleList from './articleList'
import Input from './input'

class HomePage extends Component {
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
            
        <ArticleList articleData={this.state.articleData}/>
        <Input/>
            
        </div>
        )
        
    }

}

export default HomePage 