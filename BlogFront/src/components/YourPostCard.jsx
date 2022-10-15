import React from 'react'
import { postOne, userImg } from '../assets';
import { Link } from 'react-router-dom';

const YourPostCard = ({ postImg, category, title, userImg, user, date }) => {
    return (
        <div className="w-full gap-10">
            <Link to='/view-your-post' className=''>
                <div className='aspect-3/2 relative'>
                    <img className="rounded-xl w-full h-full object-cover object-center active:scale-[.99] md:text-lg text-base active:duration-100 hover:scale-[1.03] ease-in-out transition-all hover:duration-100" src={postImg} alt="product image" />
                    <div className='bg-primary px-2 py-1 rounded-md absolute bottom-4 left-4'>
                        <p className='text-gray-800 font-semibold text-lg uppercase'>{category}</p>
                    </div>
                </div>
            </Link>
            <div className="pt-5">
                <Link to="/view">
                    <h5 className="text-2xl font-semibold text-gray-800">{title}</h5>
                </Link>
                <div className="flex justify-between items-center pt-5">
                    <span className='flex items-center cursor-pointer'>
                        <img src={userImg} alt="" className='rounded-full w-8 h-8 mr-2 flex-shrink-0' />
                        <p className='text-md text-gray-800'>{user}</p>
                    </span>
                    <p className='text-md text-gray-400'>{date}</p>
                    {/* <a href="#" className="text-md active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all py-2 px-2 rounded-lg bg-secondary text-white text-center">Read more!</a> */}
                </div>
                <div className='flex justify-between items-center cursor-pointer pt-5 gap-5'>
                    <button className="w-full active:scale-[.99] active:duration-100 hover:scale-[1.01] ease-in-out transition-all hover:duration-100 py-3 rounded-xl bg-secondary text-white text-lg font-bold">Edit</button>
                    <button className="w-full active:scale-[.99] active:duration-100 hover:scale-[1.01] ease-in-out transition-all hover:duration-100 py-3 rounded-xl bg-secondary text-white text-lg font-bold">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default YourPostCard