import React from 'react'
import { postOne, userImg } from '../assets';

const PostCard = () => {
    return (
        <div>

            <div className="w-full gap-10">
                <a href="#" className='relative'>
                    <img className="rounded-lg active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all" src={postOne} alt="product image" />
                    <div className='bg-secondary px-2 py-1 rounded-md absolute bottom-4 left-4'>
                    <p className='text-white font-semibold text-lg uppercase'>Social</p>
                    </div>
                </a>
                <div className="pt-5">
                    <a href="#">
                        <h5 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-white">Reflect! The brand new blog website.</h5>
                    </a>
                    <div className="flex justify-between items-center pt-5">
                        <span className='flex items-center cursor-pointer'>
                            <img src={userImg} alt="" className='rounded-full w-8 h-8 mr-2'/>
                            <p className='text-md text-gray-800'>Muhammed Smani</p>
                        </span>
                        <p className='text-md text-gray-500'>6 Oct 2022</p>
                        {/* <a href="#" className="text-md active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all py-2 px-2 rounded-lg bg-secondary text-white text-center">Read more!</a> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostCard