import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { serverPath } from '../../actions/actionConstants';
import { setPosts, updateComments } from '../../actions/actionCreators';
import { Modal } from 'react-bootstrap';

import './PostView.css'

export default function PostView() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts)
  const { id } = useParams()
  const [ commentInput, setCommentInput ] = useState('');
  const [ commentList, setCommentList ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);

  const token = localStorage.getItem('token')
    let username = ''
    if (token) {
        username = token.split(',')[0]
    }

  const post = posts.find(post => post.id === id)

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
}, [dispatch])
useEffect(() => {
  if (post){
    setCommentList(post.comments)
  }
}, [post])

const handleOpen = () => setShowModal(true)
const handleClose = () => setShowModal(false)
const handleCommentSubmit = async () => {
  await axios.post('/api/updatepost', {id: id, username: (username ? username : "Anonymous"), comment: commentInput})
  dispatch(updateComments(post, {username: (username ? username : "Anonymous"), comment: commentInput}))
  setCommentInput('');
  setCommentList([...commentList, {username: (username ? username : "Anonymous"), comment: commentInput}])
  handleClose();
}
  
  if(!post) {
    return (
      <div className='post'>
        <div className="empty-div"></div>
        <h2>Post not found!</h2>
      </div>
    )
  }
  const postBody = post.body.replace(/\\/g, '');
  return (
    <div>
      <div className="empty-div"></div>
      <div className='post'>
        <h1 className='post-title'> { post.title } </h1>
        <hr />
        <p className='post-body'> { postBody } </p>
        <button type='button' className='btn comment btn-outline-success' onClick={handleOpen}>Comment</button>
      </div>
      <div className="empty-div"></div>
        <ul className='comments'>
            { commentList.length > 0 ? (
              commentList.map((comment, index) => (
                <li key={index}><h5>{comment.username}: </h5><p>{comment.comment}</p></li>
              ))
            ) : (
              <li>No comments yet.</li>
            )
          }
        </ul>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enter your comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea name="comment" id="comment" rows="3" value={commentInput} onChange={(e) => setCommentInput(e.target.value)}></textarea>
          </Modal.Body>
          <Modal.Footer>
              <button type="button" onClick={handleClose}>Close</button>
              <button type="button"onClick={handleCommentSubmit}>Submit</button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}
