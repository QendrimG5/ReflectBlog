import React from 'react'
import { logoIcon } from '../assets'
import { LogInForm } from '../components'


const Login = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex items-center justify-center lg:w-1/2">
        <LogInForm />
      </div>
      <div className="hidden relative lg:flex w-1/2 items-center justify-center">
        <div className="w-80 h-80 animate-pulse-slow">
          <img src={logoIcon} alt="" />
        </div>
        {/* <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" /> */}
      </div>
    </div>
  );
}

export default Login