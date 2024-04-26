import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import './home.css'

export default function Home() {
    const navigate = useNavigate();
    const posts = useSelector(state => state.posts.posts)

    const handleNewPostClick = () => {
        navigate('/tendytalk/newpost')
    }

    const postList = posts.map(post => {
        try{
            return (
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active" key={post.id}>
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{ post.newPost[0] }</h5>
                </div>
                <p className="mb-1">{ post.newPost[1] }</p>
            </a>
            )}
        catch {
            console.log(post.newPost)
        }
    })

  return (
    <div className='home-container'>
        <div className="row-container">
            <button 
                type='button' 
                className='btn btn-outline-dark new-post-btn' 
                onClick={ handleNewPostClick }>
                    New Post
            </button>
        </div>
        <div className="list-group">
            { postList }
        </div>
    </div>
  )
}
