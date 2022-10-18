import React from 'react'
import PostCard from './PostCard'
import UserInfo from './UserInfo'
import { postOne, userImg } from '../assets';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import axios from "axios"

const SearchPostAndUser = (props) => {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState("")
  const query = useRef("");

  console.log(title);





  async function addUserHandler() {
    var data = {


      query: query.current.value,


    }

    try {
      await axios.get(`https://localhost:5001/api/Article/GetArticles?search=${data.query}`)
        .then((response) => {
          console.log(response.data)
          setPosts(response.data)


        })
    }
    catch (err) {
      window.alert(err)
    }
  }




  return (
    <div>

      <div className="pb-4">

        <input className="w-full border-2 rounded-lg p-4 mt-1 focus:text-gray-800 bg-white border-transparent  focus:border-secondary border-primary focus:ring-secondary focus:outline-none font-light text-gray-400 transition ease-in-out" placeholder="Search..." ref={query} onChange={addUserHandler} />
      </div>

      <div className='w-full md:flex pt-5 xl:gap-20 gap-10'>
        <div className='w-full'>
          <h2 className='mb-5 md:text-3xl text-2xl font-medium text-white bg-secondary px-4 py-2 rounded-lg'>Articles</h2>
          <div className=' grid lg:grid-cols-3 grid-cols-2 xl:gap-6 gap-6'>


            {posts.map((i) => {


              return <div key={i.id} className="w-full gap-10">
                <div className='aspect-3/2'><Link to={`/view/${i.id}`}>
                  <img className="w-full h-full object-center object-cover rounded-lg active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all" src={i.imageUrl} alt="product image" />

                </Link>
                </div>
                <div className="pt-5">
                  <Link to={`/view/${i.id}`}>
                    <h5 className="text-2xl font-semibold tracking-tight text-gray-800">{i.title}</h5>
                  </Link>
                  <div className="flex justify-between items-center pt-5">
                    <Link to='/user-profile'>
                      <span className='flex items-center cursor-pointer'>
                        <img src={userImg} alt="" className='rounded-full w-8 h-8 mr-2' />
                        <p className='text-md text-gray-800'>{i.content}</p>
                      </span>
                    </Link>
                    <p className='text-md text-gray-400'> </p>
                  </div>

                </div>
              </div>
            })}

          </div>
        </div>
      </div>


    </div>

  )
}

export default SearchPostAndUser