import React from 'react'
import { PostCard, Categories, PostSuggestions } from '../components'
import { postOne, userImg } from '../assets';
import { useState, useEffect } from 'react';
import axios from 'axios'
const Home = (props) => {
  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState([])
  const catParam = category && `?category=${category}`



  useEffect(() => {
    axios.get(`http://20.76.132.225/api/Category/GetcategoriesList`).then((response) => {
      setCategories((existingData) => {
        return response.data;
      })
    })
  }, [])

  useEffect(() => {
    axios.get(`https://localhost:5001/api/Article/GetArticless${catParam}`).then((response) => {
      setPosts((existingData) => {
        console.log(response.data);
        return response.data;

      })
    })
  }, [category])





  return (
    <div className='flex-col'>

      <div className='flex justify-center'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-20'>
          {posts.map((i) => (
            <PostCard key={i.id} props={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home