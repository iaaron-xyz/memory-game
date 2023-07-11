import React from 'react'

const Board = ({numCards}) => {
  return (
    <div className='grow flex justify-center items-center text-6xl'>
      Num cards: {numCards}
    </div>
  )
}

export default Board