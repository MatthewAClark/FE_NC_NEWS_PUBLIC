import React, { Component } from 'react'
import ArticleList from './articleList'
import Input from './input'

class HomePage extends Component {
    state = {
        articleData: [],
        
    }

    

    componentDidMount() {

        //Display all articles on first load
        
        fetch(`http://localhost:3000/api/topics/${this.props.match.params.topicid}/articles`)

            .then(res => {
                return res.json();
            })
            .then(body => {
                 this.setState({ articleData: body })
           
            })

        
        
    }

    render () {
        console.log(this.state.articleData)
        return (
            
            <div>
                {/* <h1>{this.state.articleData[0].belongs_to.title}</h1> */}
            
        <ArticleList articleData={this.state.articleData}/>
        <Input/>
            
        </div>
        )
        
    }

}

export default HomePage 