import React from 'react'

const TopBar = ({topRecord}) => {
  return (
    <div className=' flex-none flex p-6 bg-main-color text-accent-color'>
      <h1 className='text-4xl'>MemoryEmoji</h1>
      <h1 className='ml-auto text-2xl'>Record: {topRecord}</h1>
    </div>
  )
}

export default TopBar