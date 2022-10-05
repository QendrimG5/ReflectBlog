import { useState } from 'react'
import { Link } from 'react-router-dom';
import { logo, write, search, logIn, userImg } from '../assets';
// import { navLinks } from '../constants';
import { UserImg, LogInIcon } from '../components';
import styles from '../style';
import { UilSearch, UilEdit } from '@iconscout/react-unicons';

const Navbar = () => {

    const logedIn = true;

    return (
        <nav className='w-full flex py-4 justify-between items-center navbar'>
            <Link to="/"><img src={logo} alt="reflect" className='w-[100px]' /></Link>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                <li className='font-normal text-[16px] text-white mr-10 flex gap-10'>
                    <Link to='/write' className='flex items-center gap-2 text-lg font-medium'>
                        Write an article
                        <UilEdit />
                    </Link>
                    <Link to='/search' className='flex items-center gap-2 text-lg font-medium'>
                        Search
                        <UilSearch />
                    </Link>
                </li>
                <div className="bg-primary b rounded-full w-[40px] h-[40px] flex justify-center items-center overflow-hidden">
                    {logedIn ? <Link to='/log-in'><UserImg /></Link> : <Link to='/log-in'><LogInIcon /></Link>}
                </div>
            </ul>
        </nav>

    )
}

export default Navbar