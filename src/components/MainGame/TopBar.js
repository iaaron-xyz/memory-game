import React from 'react'

const TopBar = ({topRecord}) => {
  return (
    <div className=' flex-none flex p-6 text-accent-color'>
      <h1 className='text-4xl'>MemoryEmoji</h1>
      <h1 className='ml-auto text-2xl bg-accent text-main-color rounded-lg shadow-md p-4'>Record: {topRecord}</h1>
    </div>
  )
}

export default TopBar