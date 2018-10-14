import React, { Component } from 'react'
import api_url from "./apiConfig";
import './style.css';

class Comment extends Component {

    state = {
        votes: this.props.comment.votes
    }

voteUp = () => {
    
    fetch(`${api_url}/api/comments/${this.props.comment._id}?vote=up`, {
        headers: new Headers({ "Content-Type": "application/json" }),
        method: 'PUT'
    })
        .then(res => res.json()).then(() => {
            this.setState({
                votes: this.state.votes+1
            })
        })
        .catch(console.log)
}

voteDown = () => {
   
    fetch(`${api_url}/api/comments/${this.props.comment._id}?vote=down`, {
        headers: new Headers({ "Content-Type": "application/json" }),
        method: 'PUT'
    })
        .then(res => res.json()).then(() => {
            this.setState({
                votes: this.state.votes-1
            })
        })
        .catch(console.log)
}

deleteComment = (index) => {
  
     fetch(`${api_url}/api/comments/${this.props.comment._id}`, {
        headers: new Headers({ "Content-Type": "application/json" }),
         method: 'DELETE'
     })
        .then(res => res.json()).then(() => {
            this.props.removeCommentFromDOM(index)})
        .catch(console.log)
}
    
    render() {
        
        return (
        
            <div className='card card-background-color'>

            <div className='columns'>
            <div className='column vote is-1'> 
                    <a className='fas fa-thumbs-up voteUp' onClick={this.voteUp}></a>
                    <p> {this.state.votes}</p>
                    <a className='fas fa-thumbs-down voteDown' onClick={this.voteDown}></a>
                </div>
                <div className='column'>
   
<p>{this.props.comment.body}</p>
</div>
<div className='column is-1'>
<a className='fas fa-trash' onClick={() => this.deleteComment(this.props.index)}></a>
    </div>
            </div>
            
        </div>


         
        )
    }
}

export default Comment