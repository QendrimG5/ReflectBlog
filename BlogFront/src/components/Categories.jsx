import React from 'react'

const categories = () => {
  return (
    <div className='w-full flex justify-center gap-10 max-w-sm'>
        <a href="#" className='text-black focus:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus:bg-secondary active:scale-[.98] active:duration-75 ease-in-out transition-all'>All</a>
        <a href="#" className='text-black focus:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus:bg-secondary active:scale-[.98] active:duration-75 ease-in-out transition-all'>Social</a>
        <a href="#" className='text-black focus:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus:bg-secondary active:scale-[.98] active:duration-75 ease-in-out transition-all'>Sport</a>
        <a href="#" className='text-black focus:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus:bg-secondary active:scale-[.98] active:duration-75 ease-in-out transition-all'>Entertainment</a>
    </div>
  )
}

export default categories