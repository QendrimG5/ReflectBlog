import React from 'react';
import { postOne, userImg } from '../assets';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";


const ViewSinglePost = (props) => {
  const [postProps, setPostProps] = useState({

  })
  const value = window.location.pathname;
  console.log(value);
  const id = value.split('/')[2]

  console.log(id);


  // const [posts, setPosts] = useState([])
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [categories, setCategories] = useState("");
  // const [photo, setPhoto] = useState("");
  // const [date, setDate] = useState("");
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");

  // useEffect(() => {
  //   axios.get("https://localhost:5001/Article/GetArticless").then((response) => {
  //     setPosts((existingData) => {
  //       return response.data;


  //     })
  //   })
  // }, [])


  useEffect(() => {
    axios
      .get(`http://20.76.132.225/api/Article/GetArticle?id=${id}`)
      .then((res => {
        // const {title, } = res.data;
        setPostProps(res?.data)
        // console.log("res.data.imageUrl", res.data)
        // setTitle(res.data.title);
        // setContent(res.data.content);
        // setCategories(res.data.category.name);
        // setPhoto(res.data.imageUrl);
        // setDate(res.data.date);
        // setName(res.data.user.giveName);
        // setLastName(res.data.user.familyName);
      }))
      .catch(error => console.log(error))
  }, []);


  console.log("photo", postProps);
  // console.log("title", title);

  //  const {title, imageUrl, categories, content, name, lastName, date} = postProps;


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
            {/* <a href="#" className="text-md active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all py-2 px-2 rounded-lg bg-secondary text-white text-center">Read more!</a> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewSinglePost