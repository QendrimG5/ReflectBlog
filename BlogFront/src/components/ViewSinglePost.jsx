import React from 'react';
import { postOne, userImg } from '../assets';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";


const ViewSinglePost = (props) => {
  const [postProps, setPostProps] = useState({

  })
  const value = window.location.pathname;
  const id = value.split('/')[2]


  useEffect(() => {
    axios
      .get(`https://localhost:5001/api/Article/GetArticle?id=${id}`)
      .then((res => {
        setPostProps(res?.data)
      }))
      .catch(error => console.log(error))
  }, []);

  return (
    <div className='flex justify-center'>

      <div className="w-full">
        <div className='pb-5'>
          <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold tracking-tight text-gray-800">{postProps?.title}</h5>
        </div>
        <a href="#" className='relative aspect-3/2'>
          <img className="rounded-lg object-cover object-center" src={postProps?.imageUrl} alt="product image" />
          <div className='bg-primary px-2 py-1 rounded-md absolute bottom-4 left-4'>
            <p className='text-gray-900 font-semibold text-lg uppercase'>{postProps?.categories}</p>
          </div>
        </a>
        <div className="pt-5">
          <p className='text-gray-800 lg:text-lg md:text-base text-sm'>{postProps?.content}</p>
          <div className="flex justify-between items-center pt-10">
            <span className='flex items-center cursor-pointer'>
              <img src={userImg} alt="" className='rounded-full lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 mr-2' />
              <p className='lg:text-lg md:text-base text-sm text-gray-800'> {postProps?.givenName} {postProps?.lastName}</p>
            </span>
            <p className='lg:text-lg md:text-base text-sm text-gray-400'>{postProps?.date}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewSinglePost