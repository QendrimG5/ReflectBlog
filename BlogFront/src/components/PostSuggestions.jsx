import React from 'react'
import PostCard from './PostCard'
import { postOne, userImg } from '../assets';
import { useState, useEffect } from 'react';
import axios from 'axios'


const PostSuggestions = ({props}) => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get("http://20.76.132.225/api/Article/GetArticlesList").then((response)=>{
          setPosts((existingData)=>{
        return response.data;
        
          })
        })
      },[])
    return (
        <div className='pt-20'>

            <h2 className='mb-5 md:text-3xl text-2xl font-medium bg-secondary text-white px-4 py-2 rounded-lg'>Read other social posts</h2>
{posts.map((i)=>{
            <PostCard key={i.id} props={i} />
        })}
            <div className='grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10'>
            </div>
        </div>
    )
}

export default PostSuggestions