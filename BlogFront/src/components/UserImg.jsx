import React from 'react'
import { userImg } from '../assets'

const UserImg = () => {
    return (
        <div>
            <img src={userImg} alt="userImg" className='object-cover min-w-15' />
        </div>
    )
}

export default UserImg