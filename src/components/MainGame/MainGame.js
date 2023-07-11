import React from 'react'

const MainGame = ({numCards}) => {
  return (
    <div>
      <h1 className='text-4xl'>
        {numCards}
      </h1>
    </div>
  )
}

export default MainGame