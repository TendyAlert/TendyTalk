import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import { addPost } from '../../actions/actionCreators';
import './newpost.css'
import { serverPath } from '../../actions/actionConstants';

export default function NewPost() {
    const titleInput = useRef(null);
    const bodyInput = useRef(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleNewPost = async (event) => {
        event.preventDefault();
        dispatch(addPost([titleInput.current.value, bodyInput.current.value]))
        await axios.post(serverPath + '/api/newpost', {title: titleInput.current.value, body: bodyInput.current.value})
        
        navigate('/tendytalk')

        titleInput.current.value = '';
        bodyInput.current.value = ''
    }
  return (
    <div className='new-post'>
        <div className="empty-div"></div>
        <legend>New Post</legend>
        <form action="/tendytalk" className='new-post-form' onSubmit={ handleNewPost }>
            <div className="row">
                <label htmlFor="title" className="col-sm-2 col-form-label">Title:</label>
                <input type="text" className='form-control post-title-box' id="title" ref={titleInput} />
            </div>
            <div className="row">
                <textarea className='form-control' id="body" rows="3" ref={bodyInput} required></textarea>
            </div>
            <div className="row">
                <button type="submit" className='btn btn-outline-success'>Submit</button>
            </div>
        </form>
    </div>
  )
}
