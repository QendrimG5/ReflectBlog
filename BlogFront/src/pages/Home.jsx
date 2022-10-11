import React from 'react'
import { PostCard, Categories } from '../components'
import { postOne, userImg } from '../assets';

const Home = () => {

  return (
    <div className='flex-col'>
      <div className='flex justify-center pb-10 overflow-x-auto'>
        <Categories />
      </div>
      <div className='flex justify-center'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-20'>
          <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg = {userImg} user="Muhammed Smani" date="6 Oct 2022" />
          <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg = {userImg} user="Muhammed Smani" date="6 Oct 2022" />
          <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg = {userImg} user="Muhammed Smani" date="6 Oct 2022" />
          <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg = {userImg} user="Muhammed Smani" date="6 Oct 2022" />
          <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg = {userImg} user="Muhammed Smani" date="6 Oct 2022" />
          <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg = {userImg} user="Muhammed Smani" date="6 Oct 2022" />
          <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg = {userImg} user="Muhammed Smani" date="6 Oct 2022" />
          <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg = {userImg} user="Muhammed Smani" date="6 Oct 2022" />
          <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg = {userImg} user="Muhammed Smani" date="6 Oct 2022" />
          <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg = {userImg} user="Muhammed Smani" date="6 Oct 2022" />
          <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg = {userImg} user="Muhammed Smani" date="6 Oct 2022" />
          <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg = {userImg} user="Muhammed Smani" date="6 Oct 2022" />
        </div>
      </div>
    </div>
  )
}

export default Home