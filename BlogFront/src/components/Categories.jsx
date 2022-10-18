import React from 'react'
import { Categories } from '../constants';

const categories = ({ props }) => {
  return (
    <div className='w-full'>
      <ul className='list-none w-full flex sm:justify-center gap-10'>

        <li

          className={`text-gray-800 focus-within:text-white font-semibold text-lg uppercase px-2 py-1 rounded-md focus-within:bg-secondary active:scale-[.98] active:duration-75 `}
        >
          <a href={`#{article.id}`}>
            {props.name}
          </a>
        </li>

      </ul>
    </div>
  )
}

export default categories