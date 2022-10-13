import { useState } from 'react'
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { UserImg, LogInIcon } from '../components';
import { UilSearch, UilEdit, UilTimes, UilBars } from '@iconscout/react-unicons';
import { MagnifyingGlassIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {

const logedIn = false;

// const [logedIn, setLogedIn] = useState(false);

// const changeIcon = () => {
//     setLogedIn = true;
// };

const [toggle, setToggle] = useState(false);

return (
    <nav className='w-full flex py-4 justify-between items-center navbar'>
        <Link to="/"><img src={logo} alt="reflect" className='w-[100px]' /></Link>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            <li className='font-normal text-[16px] text-white mr-10 flex gap-10'>
                <Link to='/write' className='flex items-center gap-2 text-lg font-medium hover:text-primary transition ease-in-out'>
                    Write an article
                    <PencilSquareIcon className='h-6 w-6' />
                </Link>
                <Link to='/search' className='flex items-center gap-2 text-lg font-medium hover:text-primary transition ease-in-out'>
                    Search
                    <MagnifyingGlassIcon className='h-6 w-6' />
                </Link>
            </li>
            <div className="bg-white hover:bg-primary transition duration-300 rounded-full w-10 h-10 flex justify-center items-center overflow-hidden">
                {logedIn ? <Link to='/log-in'><UserImg /></Link> : <Link to='/log-in'><LogInIcon /></Link>}
            </div>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center z-10'>
            <div
                className='w-[28px] h-[28px] object-contain text-white hover:text-primary'
                onClick={() => setToggle((prev) => !prev)}
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
                    </li>
                    <div className="bg-white hover:bg-primary transition duration-300 rounded-full w-10 h-10 flex justify-center items-center overflow-hidden order-1" onClick={() => setToggle((prev) => !prev)}>
                        {logedIn ? <Link to='/log-in'><UserImg /></Link> : <Link to='/log-in'><LogInIcon /></Link>}
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