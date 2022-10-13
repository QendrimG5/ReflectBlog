import React from 'react'
import { Link } from 'react-router-dom'
import { logIn } from '../assets'
import { UilUser } from '@iconscout/react-unicons';
import { UserCircleIcon, UserIcon } from '@heroicons/react/24/solid';

const LogInIcon = () => {
    return (
        <div className='text-secondary'>
            <UserIcon className='w-6 h-6' />
        </div>
    )
}

export default LogInIcon