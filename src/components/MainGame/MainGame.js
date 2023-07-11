import React from 'react'
import TopBar from './TopBar'
import Board from './Board'
import BottomElement from './BottomElement'

const MainGame = ({numCards, difficulty}) => {
  return (
    <div className='bg-neutral flex flex-col h-full'>
      <TopBar />
      <Board numCards={numCards} difficulty={difficulty}/>
      <BottomElement />
    </div>
  )
}

export default MainGame