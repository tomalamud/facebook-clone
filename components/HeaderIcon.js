import React from 'react'

function HeaderIcon({ Icon, active }) {
  return (
    <div className='flex items-center rounded-xl cursor-pointer md:hover:bg-gray-100 md:active:border-b-2 md:active:border-blue-300 group'>
      <Icon  className={`h-5 text-gray-500 my-2 px-2 group-hover:text-blue-500 text-center mx-auto ${active && "text-blue-500"}`}/>
    </div>
  )
}

export default HeaderIcon