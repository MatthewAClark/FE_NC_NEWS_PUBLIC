import React, { Component } from 'react'
import ArticleList from './articleList'
import Input from './input'

class TopicPage extends Component {
    // state = {
    //     articleData: [],
        
    // }

    

    // componentDidMount() {

    //     //Display all articles on first load
        
    //     fetch(`http://localhost:3000/api/topics/${this.props.match.params.topicid}/articles`)

    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(body => {
    //              this.setState({ articleData: body })
           
    //         })

        
        
    // }

    render () {
        
        return (
            
            <div>
                {/* <h1>{this.state.articleData[0].belongs_to.title}</h1> */}
            
        <ArticleList topicId={this.props.match.params.topicid}/>
        {/* <Input/> */}
            
        </div>
        )
        
    }

}

export default TopicPage 