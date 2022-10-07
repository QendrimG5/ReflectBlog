import React from 'react'
import { ViewSinglePost, PostCard, PostSuggestions } from '../components'

const View = () => {
  return (
    <div className='w-full'>
      <ViewSinglePost />
      <PostSuggestions />
    </div>
  )
}

export default View