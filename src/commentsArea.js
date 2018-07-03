import React, { Component } from 'react'
import Comment from './comment'

const CommentsArea = (props) => {
        return (
            <div>
                
            <h2>Comments</h2>
            {props.commentData.map((comment, index) => {
                
                return (
                    
                     <div key={comment._id}>
                    <Comment comment={comment} index={index} removeCommentFromDOM={props.removeCommentFromDOM}/>
                   
                    </div>
                )
            })}
        </div>
        )
        
    }





export default CommentsArea 