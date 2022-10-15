import React from 'react'
import { Refl, Ect} from '../assets'
import { LogInForm } from '../components'


const Login = () => {
  return (
    <div className="flex w-full justify-center items-center ">
      <div className="flex items-center justify-center w-full">
        <LogInForm />
      </div>
      <div className='-z-10 opacity-30 animate-pulse-slow'>
      <Refl  className='fixed bottom-0 right-[2%] lg:w-1/2 md:w-2/3 w-3/4 refl'/>
      <Ect  className='fixed top-0 left-[2%] lg:w-1/2 md:w-2/3 w-3/4 ect'/>
      </div>
      {/* <div className="hidden relative lg:flex w-1/2 items-center justify-center">
        <div className="w-80 h-80 animate-pulse-slow">
          <ReflectDarkBlueWhite />
        </div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div> */}
    </div>
  );
}

export default Login