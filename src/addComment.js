import React, {Component} from 'react'

class AddComment extends React.Component {
    state = {
        inputBody: ""
        
    }

    // 
    handleBodyChange = (event) => {
        
        this.setState({
            inputBody: event.target.value,
        })
    }



    render() {
        return (
            <div>
                <h2>New Comment</h2>
                <form>
                   
                   
                    <textarea name="comment" onChange={this.handleBodyChange} placeholder="Enter comment" value={this.state.inputBody} />
                    <button className="btn btn-default" type="submit" disabled={this.state.inputBody.length > 120} onClick={this.newComment}>Submit</button>
                    <p>Characters left: {120 - this.state.inputBody.length}</p>
                </form>
            </div>
        );
    }

    newComment = (event) => {
        event.preventDefault()
        
                //    Use article ID to post an article
                fetch(`http://localhost:3000/api/articles/${this.props.articleId}/comments`, {
                    headers: new Headers({ "Content-Type": "application/json" }),
                    method: 'POST',
                    body: JSON.stringify({
                        body: this.state.inputBody
                    })
                })
                    .then(res => res.json()).then(console.log)
                    .catch(console.log)

            
    }
}

export default AddComment