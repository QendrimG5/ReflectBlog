import SignUpForm from "../components/SignUpForm";
import { Refl, Ect } from '../assets'

import React from 'react'

const Signup = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex w-full items-center justify-center">
                <SignUpForm />
            </div>
            <div className='-z-10 opacity-30 animate-pulse-slow'>
                <Refl className='fixed bottom-0 right-[2%] lg:w-1/2 md:w-2/3 w-3/4 refl' />
                <Ect className='fixed top-[68px] left-[2%] lg:w-1/2 md:w-2/3 w-3/4 ect' />
            </div>
        </div>
    );
}

export default Signup