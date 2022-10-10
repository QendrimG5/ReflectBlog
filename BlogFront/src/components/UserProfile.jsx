import React from 'react'
import { PostCard, Categories } from '../components'

const UserProfile = () => {
  return (
    <div>
      <div>

      </div>

      <div className='flex-col'>
      <div className='flex justify-center'>
        <div className='grid xl:grid-cols-2 md:grid-cols-2 grid-cols=1 gap-20'>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
      </div>
  )
}

export default UserProfile