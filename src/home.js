import React, { Component } from 'react'
import ArticleList from './articleList'


class HomePage extends Component {

    render () {
        return (
            <div>
            
        <ArticleList  />
        {/* <ArticleList articleData={this.state.articleData} /> */}
        {/* <Input updateState={this.updateState}/> */}
            
        </div>
        )
        
    }

}

export default HomePage 