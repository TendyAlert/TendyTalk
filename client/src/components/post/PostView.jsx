import React from 'react'
import { userSelector } from 'react-redux'

export default function PostView() {
    const posts = useSelector(state => state.posts.posts)


  return (
    <div>PostView</div>
  )
}
