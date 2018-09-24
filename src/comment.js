import React, { Component } from 'react'
import api_url from "./apiConfig";

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
            
            <div>
                <p>{this.props.comment.body}</p>
                <p>votes: {this.state.votes}</p>
                <button onClick={this.voteUp}>Vote up</button>
                <button onClick={this.voteDown}>Vote down</button>
                <button onClick={() => this.deleteComment(this.props.index)}>Delete comment</button>
            </div>
        )
    }
}

export default Comment