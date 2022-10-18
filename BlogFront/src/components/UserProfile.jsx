import React from 'react'
import { YourPostCard } from '../components'
import { userImg } from '../assets'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { useState, useEffect } from 'react';
import axios from 'axios'
const UserProfile = (props) => {
  const [posts, setPosts] = useState([])
  const token = localStorage.getItem('token');
  var decoded = jwt_decode(token);

  console.log(decoded);
  console.log(decoded.UserName);
  console.log(decoded.UserId)

  useEffect(() => {
    axios.get(`http://20.76.132.225/api/Article/GetArticlesList`).then((response) => {
      const posts = response.data;
      const filteredPosts = posts?.filter(post => post.authorId === parseInt(decoded.UserId));
      setPosts(filteredPosts)

      // console.log("filtered posts", filtered);


      // setPosts((existingData) => {
      //   console.log(response.data);
      //   return response.data;


      //   console.log(response.data);
      // })
    })
  }, [])


  return (


    <div>
      <div>
        <div className="flex lg:flex-row flex-col justify-between items-center pb-20 gap-10">
          <div className='lg:w-1/4 w-full  flex justify-center'>
            <div className='min-w-[100px] w-[200px] min-h-[100px] h-[200px]'>
              <img src={userImg} alt="" className='w-full h-full rounded-full' />
            </div>
          </div>
          <div className='lg:w-3/4 w-full grid lg:grid-cols-2 grid-cols-1 gap-x-5'>
            <div className="pb-4">
              <label className="tex-lg text-gray-800" >First Name:    </label>
              <input className="w-full border-2 rounded-xl p-4 mt-1 bg-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-800" placeholder={decoded.GivenName} disabled />
            </div>
            <div className="pb-4">
              <label className="tex-lg text-gray-800" >Last Name:    </label>
              <input className="w-full border-2 rounded-xl p-4 mt-1 bg-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-black-800" placeholder={decoded.FamilyName} disabled />
            </div>
            <div className="pb-4">
              <label className="tex-lg text-gray-800" > User Name:    </label>
              <input className="w-full border-2 rounded-xl p-4 mt-1 bg-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-black-800" placeholder={decoded.GivenName} disabled />
            </div>
            <div className="pb-4">
              <label className="tex-lg text-gray-800" >Email:    </label>
              <input className="w-full border-2 rounded-xl p-4 mt-1 bg-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-800" placeholder={decoded.Email} disabled />
            </div>
          </div>
        </div>
      </div>

      <div className='flex-col'>
        <div className='flex justify-center'>
          <div className='grid lg:grid-cols-2 grid-cols=1 gap-20'>

            {posts.map((i) => (



              <YourPostCard key={i.id} props={i} />
            ))}


          </div>
        </div>
      </div>
    </div >
  )
}

export default UserProfile