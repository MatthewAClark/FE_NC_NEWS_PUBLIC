import React, { Component } from 'react'

class Input extends React.Component {
    state = {
        inputBody: "",
        inputTitle: "",
        inputTopic: ""
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
        console.log('Wish it worked:',this.state.inputTopic)
        fetch('http://localhost:3000/api/topics/5b01a1fc5cc2d4354aec07dc/articles', {
            headers: new Headers({ "Content-Type": "application/json" }),
            method: 'POST',
            body: JSON.stringify({
                title: this.state.inputTitle,
                body: this.state.inputBody
            })
        })
            .then(res => res.json()).then(console.log)
            .catch(console.log)

    }
}

export default Input