import React, { Component } from 'react'


class ArticleItem extends Component {
    state = {
        votes: this.props.article.votes
    }

    voteUp = () => {

        fetch(`http://localhost:3000/api/articles/${this.props.article._id}?vote=up`, {
            headers: new Headers({ "Content-Type": "application/json" }),
            method: 'PUT'
        })
            .then(res => res.json()).then(() => {
                this.setState({
                    votes: this.state.votes+1
                })
            }
            )
            .catch(console.log)
    }

    voteDown = () => {

        fetch(`http://localhost:3000/api/articles/${this.props.article._id}?vote=down`, {
            headers: new Headers({ "Content-Type": "application/json" }),
            method: 'PUT'
        })
            .then(res => res.json()).then(() => {
                this.setState({
                    votes: this.state.votes-1
                })})
            .catch(console.log)
    }

  

    render() {
        return (

            <div>


                <h5><a href={"/articles/" + this.props.article._id}>{this.props.article.title}</a></h5>

                <p><a href={"/topics/" + this.props.article.belongs_to._id + "/articles"}>{this.props.article.belongs_to.title}</a></p>

                <p>votes: {this.state.votes}</p>
                <button onClick={this.voteUp}>Vote up</button>
                <button onClick={this.voteDown}>Vote down</button>

            </div>
        )
    }
}

export default ArticleItem 