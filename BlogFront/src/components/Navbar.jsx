import { useState } from 'react'
import { Link } from 'react-router-dom';
import { logo, write, search, logIn, userImg } from '../assets';
import { UserImg, LogInIcon } from '../components';
import { UilSearch, UilEdit, UilTimes, UilBars } from '@iconscout/react-unicons';

const Navbar = () => {

    const logedIn = true;

    // const [logedIn, setLogedIn] = useState(false);

    // const changeIcon = () => {
    //     setLogedIn = true;
    // };

    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex py-4 justify-between items-center navbar'>
            <Link to="/"><img src={logo} alt="reflect" className='w-[100px]' onClick={() => setToggle((prev) => !prev)} /></Link>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                <li className='font-normal text-[16px] text-white mr-10 flex gap-10'>
                    <Link to='/write' className='flex items-center gap-2 text-lg font-medium hover:text-primary transition ease-in-out'>
                        Write an article
                        <UilEdit />
                    </Link>
                    <Link to='/search' className='flex items-center gap-2 text-lg font-medium hover:text-primary transition ease-in-out'>
                        Search
                        <UilSearch />
                    </Link>
                </li>
                <div className="bg-primary b rounded-full w-10 h-10 flex justify-center items-center overflow-hidden">
                    {logedIn ? <Link to='/log-in'><UserImg /></Link> : <Link to='/log-in'><LogInIcon /></Link>}
                </div>
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center z-10'>
                <div
                    className='w-[28px] h-[28px] object-contain text-white hover:text-primary'
                    onClick={() => setToggle((prev) => !prev)}
                >
                    {toggle ? <UilTimes /> : <UilBars />}
                </div>
                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className='list-none flex flex-col justify-end items-center flex-1 gap-5'>
                        <li className='font-normal text-[16px] text-white flex flex-col items-center gap-5'>
                            <Link to='/write' className='flex items-center gap-2 text-lg font-medium hover:text-primary transition ease-in-out'onClick={() => setToggle((prev) => !prev)}>
                                Write an article
                                <UilEdit />
                            </Link>
                            <Link to='/search' className='flex items-center gap-2 text-lg font-medium hover:text-primary transition ease-in-out' onClick={() => setToggle((prev) => !prev)}>
                                Search
                                <UilSearch />
                            </Link>
                        </li>
                        <div className="bg-primary b rounded-full w-10 h-10 flex justify-center items-center overflow-hidden" onClick={() => setToggle((prev) => !prev)}>
                            {logedIn ? <Link to='/log-in'><UserImg /></Link> : <Link to='/log-in'><LogInIcon /></Link>}
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar