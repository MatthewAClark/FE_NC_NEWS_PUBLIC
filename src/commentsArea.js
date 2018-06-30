import React, { Component } from 'react'
import Comment from './comment'

const CommentsArea = (props) => {
        return (
            <div>
                
            <h2>Comments</h2>
            {props.commentData.map(comment => {
                
                return (
                    
                     <div key={comment._id}>
                    <Comment comment={comment}/>
                    {/* //     <p>{comment.body}</p>
                    //     <p>votes: {comment.votes}</p>
                    //     <button onClick={(e) => voteUp(e)} value={comment._id}>Vote up</button>
                    //     <button>Vote down</button> */}
                    </div>
                )
            })}
        </div>
        )
        
    }





export default CommentsArea 