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
            <div className='card newpost'>

                <h2 className='title is-3'>New Post</h2>

                <form>
                    <div className='columns'>
                        <div className = 'column is-one-third'>

                            <div className='field is-horizontal'>


                                <label className='label field-label'>Select Topic</label>

                                <div className='control field-body'>
                                    <select className='select' name="topics" onChange={this.handleTopicChange}>
                                        <option value="cooking" >Cooking</option>
                                        <option value="coding">Coding</option>
                                        <option value="football">Football</option>
                                    </select>
                                </div>
                            </div>
                            <div className='field is-horizontal'>

                                <label className='label field-label'>Title</label>
                                <div className='control field-body'>
                                    <input name="newtitle" className='input' onChange={this.handleTitleChange} placeholder="Enter title" value={this.state.inputTitle} />
                                </div>
                            </div>
                        </div>

                    <div className='column is-two-thirds'>
                        <div className='field '>
                            <label className='label '>Post</label>
                            <div>
                                <div className='control '>
                                    <textarea name="newpost" className='textarea' onChange={this.handleBodyChange} placeholder="Enter post" value={this.state.inputBody} />
                                </div>
                                <p>Characters left: {120 - this.state.inputBody.length}</p>
                            </div>

                        </div>
                        </div>
                    </div>

                
                </form>

                <div className='level-right'>
                    <button className="btn btn-default" type="submit" disabled={this.state.inputBody.length > 120} onClick={this.newPost}>Submit</button>
                </div>
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