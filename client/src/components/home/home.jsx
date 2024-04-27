import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { serverPath } from '../../actions/actionConstants';
import { setPosts } from '../../actions/actionCreators';

import './home.css'


    

export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/posts');
                const posts = response.data.posts;
                dispatch(setPosts(posts));
            } catch (error) {
                console.error("Error fetching posts:", error)
            }
        }

        fetchPosts()
    }, [])
    
    const handleNewPostClick = () => {
        navigate('/tendytalk/newpost')
    }


    const postList = posts.map(post => {
        try{
            const postBody = post.body.replace(/\\/g, '');
            return (
            <a href={`/tendytalk/${post.id}`} className="list-group-item list-group-item-action flex-column align-items-start active" key={post.id}>
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{ post.title }</h5>
                </div>
                <p className="mb-1">{ postBody }</p>
            </a>
            )}
        catch {
            return post.title
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

