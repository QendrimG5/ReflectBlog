import SignUpForm from "../components/SignUpForm";
import { logoIcon } from "../assets";

import React from 'react'

const Signup = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex w-full items-center justify-center lg:w-1/2">
                <SignUpForm />
            </div>
            <div className="hidden relative lg:flex w-1/2 items-center justify-center">
                <div className="w-80 h-80 animate-pulse-slow">
                    <img src={logoIcon} alt="" />
                </div>
                {/* <div className="w-full h-1/2 absolute b
                ottom-0 bg-white/10 backdrop-blur-lg" /> */}
            </div>
        </div>
    );
}

export default Signup