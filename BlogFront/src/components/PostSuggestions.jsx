import React from 'react'
import PostCard from './PostCard'
import { postOne, userImg } from '../assets';


const PostSuggestions = () => {
    return (
        <div className='pt-20'>
            <h2 className='mb-6 lg:text-2xl md:text-2xl sm:text-xl text-lg font-medium tracking-normal text-gray-800 bg-primary px-5 py-3 rounded-lg'>Read other social posts</h2>
            <div className='grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10'>
                <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg={userImg} user="Muhammed Smani" date="6 Oct 2022" />
                <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg={userImg} user="Muhammed Smani" date="6 Oct 2022" />
                <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg={userImg} user="Muhammed Smani" date="6 Oct 2022" />
                <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg={userImg} user="Muhammed Smani" date="6 Oct 2022" />
            </div>
        </div>
    )
}

export default PostSuggestions