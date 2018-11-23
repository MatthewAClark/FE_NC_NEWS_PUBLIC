import React from 'react'
import Comment from './comment'

const CommentsArea = (props) => {
        return (
            <div>
                <section className='hero is-dark is-small'>
                <div className = 'hero-body'>
           
            <h1 className = 'subtitle'>Comments</h1>
          
          </div>
        </section>
            {props.commentData.map((comment, index) => {
                
                return (
                    
                     <div className='card' key={comment._id}>
                    <Comment comment={comment} index={index} removeCommentFromDOM={props.removeCommentFromDOM}/>
                   
                    </div>
                )
            })}
        </div>
        )
        
    }





export default CommentsArea 