import React, { Component } from 'react'
import ArticleList from './articleList'
import Input from './input'

class HomePage extends Component {
    // state = {
    //     articleData: [],
        
    // }

//    updateState = (newData) => {

//     const newDataArr = this.state.articleData.push(newData)
//     componentDidUpdate(this.state) {
//         // Typical usage (don't forget to compare props):
//         if (this.state.articleData.length !== prevProps.userID) {
//           this.fetchData(this.props.userID);
//         }
//       }
//        this.setState({
//            articleData: this.state.articleData.push(newData)
//        })
//    } 

    // componentDidMount() {

    //     //Display all articles on first load
        
    //     fetch("http://localhost:3000/api/articles/")

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
            
        <ArticleList  />
        {/* <ArticleList articleData={this.state.articleData} /> */}
        {/* <Input updateState={this.updateState}/> */}
            
        </div>
        )
        
    }

}

export default HomePage 