import React, { Component } from 'react'


const ArticleList = (props) => {
    return (
        <div>

            {props.articleData.map(article => {
                return (
                    <div key={article._id}>
                        <h5><a href={"/articles/" + article._id}>{article.title}</a></h5>
                        <p><a href={"/articles/" + article.belongs_to._id}>{article.belongs_to.title}</a></p>
                    </div>
                )
            })}

        </div>
    )

}



export default ArticleList 