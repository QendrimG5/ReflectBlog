import React from 'react'
import { userImg } from '../assets'

const UserInfo = () => {
    return (
        <div>
            <div className="flex justify-between items-center pb-5">
                <span className='flex items-center cursor-pointer'>
                    <img src={userImg} alt="" className='rounded-full lg:w-12 lg:h-12 md:w-10 md:h-10 w-14 h-14 mr-4' />
                    <p className='lg:text-lg md:text-base text-xl text-gray-800'>Muhammed Smani</p>
                </span>
            </div>
        </div>
    )
}

export default UserInfo