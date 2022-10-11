import React from 'react'
import PostCard from './PostCard'
import { postOne, userImg } from '../assets';


const PostSuggestions = () => {
    return (
        <div className='pt-20 pb-20'>
            <h2 className='pb-5 text-3xl font-semibold tracking-tight text-gray-800'>Read other social posts</h2>
            <div className='grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20 px-10 py-10 rounded-lg bg-primary'>
                <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg={userImg} user="Muhammed Smani" date="6 Oct 2022" />
                <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg={userImg} user="Muhammed Smani" date="6 Oct 2022" />
                <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg={userImg} user="Muhammed Smani" date="6 Oct 2022" />
                <PostCard postImg={postOne} category="Social" title="Reflect! The brand new blog website." userImg={userImg} user="Muhammed Smani" date="6 Oct 2022" />
            </div>
        </div>
    )
}

export default PostSuggestions