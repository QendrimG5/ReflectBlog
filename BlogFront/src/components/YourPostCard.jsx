import React from 'react'
import { postOne, userImg } from '../assets';
import { Link } from 'react-router-dom';
import axios from 'axios'
const YourPostCard = ({ props }) => {


    const PostDelete = () => {

        fetch
        (`https://localhost:5001/api/Article/DeleteArticle/` + props.id,{

            method: 'DELETE'

        })
        
            .then((response) => {

                console.log(response)

            })
    }

    return (
        <div>

            <div className="w-full gap-10">
                <Link to='/view-your-post' className='relative'>
                    <img className="rounded-lg active:scale-[.98] active:duration-75 hover:scale-[1.05] justify-center  ease-in-out transition-all" src={props.imageUrl} alt="product image" />

                </Link>
                <div className="pt-5">
                    <Link to="/view-your-post">
                        <h5 className="text-2xl font-semibold tracking-tight text-gray-800">{props.content}</h5>
                    </Link>
                    <div className="flex justify-between items-center pt-5">
                        <Link to='/user-profile'>
                            <span className='flex items-center cursor-pointer'>
                                <img src={userImg} alt="" className='rounded-full w-8 h-8 mr-2' />
                                <p className='text-md text-gray-800'>{props.user == null ? "Qendrim" : props.user.givenName}</p>
                            </span>
                        </Link>
                        <p className='text-md text-gray-800'>Since: {props.date}</p>
                    </div>
                    <div className='flex justify-between items-center cursor-pointer pt-5 gap-5'>
                        <button className="w-full active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all py-3 rounded-xl bg-secondary text-white text-lg font-bold">Edit</button>
                        <button className="w-full active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all py-3 rounded-xl bg-secondary text-white text-lg font-bold" onClick={PostDelete}>Delete</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default YourPostCard