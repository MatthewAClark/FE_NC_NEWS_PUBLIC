import React, { Component } from 'react'

const ArticleBody = (props) => {
   
    return (
        
        <div>
        
            <div key={props._id}>
                <h2>{props.title}</h2>
                <p>{props.body}</p>
            </div>
        </div>
    )

}



export default ArticleBody 