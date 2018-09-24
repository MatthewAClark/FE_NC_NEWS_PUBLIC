import React, { Component } from 'react'
import api_url from "./apiConfig";

class Input extends Component {
    state = {
        inputBody: "",
        inputTitle: "",
        inputTopic: "cooking",
        inputTopicId: "",
    }

    handleBodyChange = (event) => {
        this.setState({
            inputBody: event.target.value,
        })
    }

    handleTitleChange = (event) => {
        this.setState({
            inputTitle: event.target.value,
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            inputTopic: event.target.value,
        })
    }



    render() {
        return (
            <div>
                <h2>New Post</h2>
                <form>
                    <select name="topics" onChange={this.handleTopicChange}>
                        <option value="cooking" >Cooking</option>
                        <option value="coding">Coding</option>
                        <option value="football">Football</option>
                    </select>
                    <input name="newtitle" onChange={this.handleTitleChange} placeholder="Enter title" value={this.state.inputTitle} />
                    <textarea name="newpost" onChange={this.handleBodyChange} placeholder="Enter post" value={this.state.inputBody} />
                    <button className="btn btn-default" type="submit" disabled={this.state.inputBody.length > 120} onClick={this.newPost}>Submit</button>
                    <p>Characters left: {120 - this.state.inputBody.length}</p>
                </form>
            </div>
        );
    }

    newPost = (event) => {
        event.preventDefault()
        // Find the topic ID
        fetch(`${api_url}/api/topics`, {
        })
            .then(res => {
                return res.json();
            })
            .then(res => {
                return res.find(elem => {
                    return elem.slug === this.state.inputTopic
                })
            })
            .then(res => {
                
                //    Use topic ID to post an article
                fetch(`${api_url}/api/topics/${res._id}/articles`, {
                    headers: new Headers({ "Content-Type": "application/json" }),
                    method: 'POST',
                    body: JSON.stringify({
                        title: this.state.inputTitle,
                        body: this.state.inputBody
                    })
                })
                    .then(res => res.json()).then(this.props.addPostToDOM)
                    .catch(console.log)

            })
    }
}



export default Input