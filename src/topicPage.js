import React, { Component } from 'react'
import ArticleList from './articleList'


class TopicPage extends Component {


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