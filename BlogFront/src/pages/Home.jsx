import React from 'react'
import { PostCard, Categories, PostSuggestions } from '../components'
import { postOne, userImg } from '../assets';
import { useState, useEffect } from 'react';
import axios from 'axios'
const Home = (props) => {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    axios.get("https://localhost:5001/Article/GetArticless").then((response)=>{
      setPosts((existingData)=>{
    return response.data;
      })
    })
  },[])







  return (
    <div className='flex-col'>
      <div className='flex w-full justify-center pb-10 overflow-x-auto'>
        <Categories />
      </div>
      <div className='flex justify-center'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-20'>
        {posts.map((i)=>(
            <PostCard key={i.id} props={i} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Home