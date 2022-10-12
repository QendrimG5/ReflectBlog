import React from 'react'
import { Categories } from '../constants';

const categories = () => {
  return (
    <div className='w-full'>
      {/* <div className='w-full flex justify-center gap-10 max-w-sm'>
        <a href="#" className='text-gray-800 focus:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus:bg-secondary active:scale-[.98] active:duration-75 '>All</a>
        <a href="#" className='text-gray-800 focus:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus:bg-secondary active:scale-[.98] active:duration-75 '>Social</a>
        <a href="#" className='text-gray-800 focus:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus:bg-secondary active:scale-[.98] active:duration-75 '>Sport</a>
        <a href="#" className='text-gray-800 focus:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus:bg-secondary active:scale-[.98] active:duration-75 '>Entertainment</a>
    </div> */}
      <ul className='list-none w-full flex sm:justify-center gap-10'>
        {Categories.map((article) => (
          <li
            key={article.id}
            className={`text-gray-800 focus-within:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus-within:bg-secondary active:scale-[.98] active:duration-75 `}
          >
            <a href={`#{article.id}`}>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default categories