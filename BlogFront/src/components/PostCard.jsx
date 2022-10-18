import React from 'react'
import { postOne, userImg } from '../assets';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'
const PostCard = ({ props }) => {


    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const navigateto = () => {
        // 👇️ navigate to /
        navigate('/view');
    };
    function navigatetoView() {

        navigateto();
    }



    return (
        <div>
            <div className="w-full gap-10" >
                <Link to={`/view/${props.id}`} >
                    <div className='aspect-3/2 relative'  >
                        <img className="rounded-lg w-full h-full active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all" src={props.imageUrl} alt="product image" />

                    </div>
                </Link>
                <div className="pt-5">

                    <h5 className="text-2xl font-semibold text-gray-800" value={props.id} >{props.title}</h5>

                    <div className="flex justify-between items-center pt-5">
                        <span className='flex items-center cursor-pointer'>
                            <img src={userImg} alt="" className='rounded-full w-8 h-8 mr-2 flex-shrink-0' />
                            <p className='text-md text-gray-800'>{props.user == null ? "Qendrim" : props.user.givenName}</p>
                        </span>
                        <p className='text-md text-gray-400'>{props.date}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostCard