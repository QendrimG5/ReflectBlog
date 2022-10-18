import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { logo, ReflectLightBlueWhite } from '../assets';
import { UserImg, LogInIcon } from '../components';
import { MagnifyingGlassIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
// import jwt_decode from 'jwt-decode'
const Navbar = () => {

    const token = localStorage.getItem('token');
    // var decoded = token && jwt_decode(token);

    // console.log(decoded);
    // console.log(decoded.UserName);


    // decoded = false;


    const navigate = useNavigate();

    const navigateLogin = () => {
        // 👇️ navigate to /
        navigate('/log-in');
    };
    const logout = () => {

        navigateLogin();
    }




    // const [logedIn, setLogedIn] = useState(false);

    // const changeIcon = () => {
    //     setLogedIn = true;
    // };

    const [toggle, setToggle] = useState(false);

    const userLogout = () => {
        token && localStorage.removeItem("token")
        navigate('/log-in')
    }

    return (
        <nav className='w-full flex py-4 justify-between items-center navbar'>
            <div className='flex flex-col'>
                <Link to="/" ><ReflectLightBlueWhite className='w-28' /></Link>
            </div>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                <li className='font-normal text-[16px] text-white mr-10 flex gap-10'>
                    <Link to='/write' className='flex items-center gap-2 text-lg font-medium hover:text-primary transition duration-300'>
                        Write an article
                        <PencilSquareIcon className='h-6 w-6' />
                    </Link>
                    <Link to='/search' className='flex items-center gap-2 text-lg font-medium hover:text-primary transition duration-300'>
                        Search
                        <MagnifyingGlassIcon className='h-6 w-6' />
                    </Link>
                    <Link to='/user-profile' className='flex items-center gap-2 text-lg font-medium hover:text-primary transition ease-in-out order-3' onClick={() => setToggle((prev) => !prev)}>
                        {/* <UserImg /> */}
                        Profile
                    </Link>
                </li>
                <div className="transition rounded w-15 h-10 duration-300 flex justify-center items-center overflow-hidden">
                    {token ?
                        <button className='text-white text-lg font-medium hover:text-primary transition duration-300' onClick={() => userLogout()}>Log out</button>
                        : <Link to='/user-profile'><UserImg /></Link>}
                </div>

            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center z-30'>
                <div
                    className='w-[28px] h-[28px] object-contain text-white hover:text-primary cursor-pointer'
                    onClick={() => {
                        setToggle((prev) => !prev)
                    }}
                >
                    {toggle ? <XMarkIcon /> : <Bars3Icon />}
                </div>
                <div
                    className={`${toggle ? 'flex sidebar' : 'no-sidebar'} p-6 bg-secondary absolute top-[70px] right-0 max-w-full h-screen items-start`}
                >
                    <ul className='list-none flex flex-col justify-end flex-1 gap-5'>
                        <li className='order-2 font-normal text-[16px] text-white flex flex-col gap-5'>
                            <Link to='/write' className='flex items-center gap-2 text-lg font-medium hover:text-primary transition ease-in-out order-2' onClick={() => setToggle((prev) => !prev)}>
                                Write an article
                                <MagnifyingGlassIcon className='w-6 h-6' />
                            </Link>
                            <Link to='/search' className='flex items-center gap-2 text-lg font-medium hover:text-primary transition ease-in-out order-1' onClick={() => setToggle((prev) => !prev)}>
                                Search
                                <PencilSquareIcon className='w-6 h-6' />
                            </Link>
                            <Link to='/user-profile' className='flex items-center gap-2 text-lg font-medium hover:text-primary transition ease-in-out order-3' onClick={() => setToggle((prev) => !prev)}>
                                {/* <UserImg /> */}
                                Profile
                            </Link>
                        </li>
                        <div className="bg-white hover:bg-primary  transition duration-300 rounded-full w-10 h-10 flex justify-center items-center overflow-hidden order-1" onClick={() => setToggle((prev) => !prev)}>
                            {/* {decoded ? <Link to='/log-in'> <UserImg /></Link> : <Link to='/log-in'>User</Link>} */}
                        </div>
                    </ul>
                </div>
            </div>
            <div className={`${toggle ? 'flex' : 'hidden'} bg-transparent right-0 top-0 absolute w-full h-screen`} onClick={() => setToggle((prev) => !prev)}>

            </div>
        </nav>
    )
}

export default Navbar