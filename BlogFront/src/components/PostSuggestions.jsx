import React from 'react'
import PostCard from './PostCard'

const PostSuggestions = () => {
    return (
        <div className='pt-20 pb-20'>
            <h1 className='pb-5 text-3xl font-semibold tracking-tight text-gray-800'>Read other social posts</h1>
            <div className='grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20 px-10 py-10 rounded-lg bg-primary'>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    )
}

export default PostSuggestions