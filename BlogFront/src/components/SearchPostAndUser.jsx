import React from 'react'
import PostCard from './PostCard'
import UserInfo from './UserInfo'

const SearchPostAndUser = () => {
  return (
    <div>
      <div className="pb-4">
        <input className="w-full border-2 rounded-lg p-4 mt-1 focus:text-gray-800 bg-white border-transparent  focus:border-secondary border-primary focus:ring-secondary focus:outline-none font-light text-gray-400 transition ease-in-out" placeholder="Search..." />
      </div>
      <div className='w-full md:flex pt-10 xl:gap-20 gap-10'>
        <div className='md:w-2/3 w-full'>
          <h2 className='mb-5 text-3xl font-medium tracking-tight text-gray-800 bg-primary px-4 py-2 rounded-lg'>Posts</h2>
          <div className=' grid lg:grid-cols-2 grid-cols-1 xl:gap-20 gap-10'>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
        <div className='md:w-1/3 w-full md:pt-0 pt-20'>
          <h2 className='mb-5 text-3xl font-medium tracking-tight text-gray-800 bg-primary px-4 py-2 rounded-lg'>Users</h2>
          <div>
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPostAndUser