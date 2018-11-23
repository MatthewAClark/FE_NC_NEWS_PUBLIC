import React from 'react'
import api_url from "./apiConfig";

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
            <form>
                <div className='columns'>
                <div className='column is-half'>
            <div className='field'>
               
               
                   {/* <div className='field-label'> */}
                   <label className='label'>New Comment</label>
                   {/* </div> */}
                   
                    {/* <div className='field-body'> */}
                    <div className='field'>

<textarea className='textarea' name="comment" onChange={this.handleBodyChange} placeholder="Enter comment" value={this.state.inputBody} />
</div>
                    {/* </div> */}
</div>
<div className='field'>
                    
                   <div className='field-label'></div>
                    <p className='field-body'>Characters left: {120 - this.state.inputBody.length}</p>

                    </div>
                   
            </div>
            <div className = 'column'>
                    <button className="btn btn-default" type="submit" disabled={this.state.inputBody.length > 120} onClick={this.newComment}>Submit</button>
                </div>
            </div>
            </form>
        );
    }

    newComment = (event) => {
        event.preventDefault()
        
                //    Use article ID to post an article
                fetch(`${api_url}/api/articles/${this.props.articleId}/comments`, {
                    headers: new Headers({ "Content-Type": "application/json" }),
                    method: 'POST',
                    body: JSON.stringify({
                        body: this.state.inputBody
                    })
                })
                    .then(res => res.json()).then(this.props.addCommentToDOM)
                    .catch(console.log)

            
    }
}

export default AddComment