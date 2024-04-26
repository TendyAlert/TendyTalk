import React from 'react'
import { userSelector } from 'react-redux'

export default function PostView() {
    const post = userSelector(posts => posts.find(id))



  return (
    <div>PostView</div>
  )
}
