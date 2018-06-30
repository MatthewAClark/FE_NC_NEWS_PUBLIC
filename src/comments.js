import React, { Component } from 'react'

const Comments = (props) => {
        return (
            <div>
            <h2>Comments</h2>
            {props.commentData.map(comment => {
                console.log('1 comment', comment)
                return (
                    <div key={comment._id}>
                        <p>{comment.body}</p>
                        <p>votes: {comment.votes}</p>
                    </div>
                )
            })}
        </div>
        )
        
    }



export default Comments 