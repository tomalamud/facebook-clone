import React from 'react'

function HeaderIcon({ Icon }) {
  return (
    <div className='flex items-center rounded-xl cursor-pointer md:px-10 hover:bg-gray-100 active:border-b-2 active:border-blue-300 group'>
      <Icon  className="h-5 text-gray-500 my-2 px-2 group-hover:text-blue-500 text-center mx-auto"/>
    </div>
  )
}

export default HeaderIcon