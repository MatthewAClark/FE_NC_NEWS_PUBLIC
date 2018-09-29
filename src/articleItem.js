import React, { Component } from 'react'
import api_url from "./apiConfig";

class ArticleItem extends Component {
    state = {
        votes: this.props.article.votes
    }

    voteUp = () => {

        fetch(`${api_url}/api/articles/${this.props.article._id}?vote=up`, {
            headers: new Headers({ "Content-Type": "application/json" }),
            method: 'PUT'
        })
            .then(res => res.json()).then(() => {
                this.setState({
                    votes: this.state.votes + 1
                })
            }
            )
            .catch(console.log)
    }

    voteDown = () => {

        fetch(`${api_url}/api/articles/${this.props.article._id}?vote=down`, {
            headers: new Headers({ "Content-Type": "application/json" }),
            method: 'PUT'
        })
            .then(res => res.json()).then(() => {
                this.setState({
                    votes: this.state.votes - 1
                })
            })
            .catch(console.log)
    }



    render() {
        return (

            <div className='card card-background-color'>

                <div className='level-left vote'>
                <div className='voteBox'> 
                        <a className='fas fa-thumbs-up voteUp' onClick={this.voteUp}></a>
                        <p>votes: {this.state.votes}</p>
                        <a className='fas fa-thumbs-down voteDown' onClick={this.voteDown}></a>
                    </div>
                    <div className='articleItem'>
                    <h5><a className='subtitle' href={"/articles/" + this.props.article._id}>{this.props.article.title}</a></h5>
                    
                    <p><a className=''href={"/topics/" + this.props.article.belongs_to._id + "/articles"}>{this.props.article.belongs_to.title}</a></p>
                </div>

                </div>
                
            </div>
        )
    }
}

export default ArticleItem 