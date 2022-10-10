import React from 'react'
import { Categories } from '../constants';

const categories = () => {
  return (
    <div>
    {/* <div className='w-full flex justify-center gap-10 max-w-sm'>
        <a href="#" className='text-gray-800 focus:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus:bg-secondary active:scale-[.98] active:duration-75 '>All</a>
        <a href="#" className='text-gray-800 focus:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus:bg-secondary active:scale-[.98] active:duration-75 '>Social</a>
        <a href="#" className='text-gray-800 focus:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus:bg-secondary active:scale-[.98] active:duration-75 '>Sport</a>
        <a href="#" className='text-gray-800 focus:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus:bg-secondary active:scale-[.98] active:duration-75 '>Entertainment</a>
    </div> */}
    <div className=''>
      <ul className='list-none w-full flex justify-center gap-10 max-w-sm'>
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
    </div>
  )
}

export default categories