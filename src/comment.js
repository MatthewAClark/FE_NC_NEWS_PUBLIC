import React, { Component } from 'react'

class Comment extends Component {

voteUp = () => {
    
    fetch(`http://localhost:3000/api/comments/${this.props.comment._id}?vote=up`, {
        headers: new Headers({ "Content-Type": "application/json" }),
        method: 'PUT'
    })
        .then(res => res.json()).then(console.log)
        .catch(console.log)
}

voteDown = () => {
   
    fetch(`http://localhost:3000/api/comments/${this.props.comment._id}?vote=down`, {
        headers: new Headers({ "Content-Type": "application/json" }),
        method: 'PUT'
    })
        .then(res => res.json()).then(console.log)
        .catch(console.log)
}
    
    render() {
        return (
            
            <div>
                <p>{this.props.comment.body}</p>
                <p>votes: {this.props.comment.votes}</p>
                <button onClick={this.voteUp}>Vote up</button>
                <button onClick={this.voteDown}>Vote down</button>
            </div>
        )
    }
}

export default Comment