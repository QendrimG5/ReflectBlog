import React from 'react'
import { PostCard, Categories } from '../components'

const Home = () => {
  return (
    <div className='flex-col'>
      <div className='flex justify-center pb-10'>
        <Categories />
      </div>
      <div className='flex justify-center'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-20'>
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
  )
}

export default Home