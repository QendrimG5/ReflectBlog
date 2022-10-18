import React from 'react'
import { userImg } from '../assets'

const UserImg = () => {
    return (
        <div>
            <img src={userImg} alt="userImg" className='object-cover w-10 h-10 rounded-full' />
        </div>
    )
}

export default UserImg