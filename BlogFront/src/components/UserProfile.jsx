import React from 'react'
import { YourPostCard } from '../components'
import { userImg } from '../assets'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  return (
    <div>
      <div>
        <div className="flex lg:flex-row flex-col justify-between items-center pb-20 gap-10">
          <div className='lg:w-1/4 w-full  flex justify-center'>
            <div className='min-w-[100px] w-[200px] min-h-[100px] h-[200px]'>
              <img src={userImg} alt="" className='w-full h-full rounded-full' />
            </div>
          </div>
          <div className='lg:w-3/4 w-full grid lg:grid-cols-2 grid-cols-1 gap-x-5'>
            <div className="pb-4">
              <label className="tex-lg text-gray-800" >First Name:    </label>
              <input className="w-full border-2 rounded-xl p-4 mt-1 bg-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400" placeholder="Muhammed" />
            </div>
            <div className="pb-4">
              <label className="tex-lg text-gray-800" >Last Name:    </label>
              <input className="w-full border-2 rounded-xl p-4 mt-1 bg-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400" placeholder="Smani" />
            </div>
            <div className="pb-4">
              <label className="tex-lg text-gray-800" > User Name:    </label>
              <input className="w-full border-2 rounded-xl p-4 mt-1 bg-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400" placeholder="muhammedsmani" />
            </div>
            <div className="pb-4">
              <label className="tex-lg text-gray-800" >Email:    </label>
              <input className="w-full border-2 rounded-xl p-4 mt-1 bg-primary border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400" placeholder="muhammed.smani@life.gjirafa.com" />
            </div>
          </div>
        </div>
      </div>

      <div className='flex-col'>
        <div className='flex justify-center'>
          <div className='grid lg:grid-cols-2 grid-cols=1 gap-20'>
            <YourPostCard />
            <YourPostCard />
            <YourPostCard />
            <YourPostCard />
            <YourPostCard />
            <YourPostCard />
          </div>
        </div>
      </div>
    </div >
  )
}

export default UserProfile