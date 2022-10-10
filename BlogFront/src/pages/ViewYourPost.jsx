import React from 'react'
import { SinglePost, PostCard, PostSuggestions, YourPost } from '../components'

const ViewYourPost = () => {
  return (
    <div className='w-full'>
      <YourPost />
      <PostSuggestions />
    </div>
  )
}

export default ViewYourPost