import React from 'react'
import TopBar from './TopBar'
import Board from './Board'
import BottomElement from './BottomElement'

const MainGame = ({numCards}) => {
  return (
    <div className='bg-neutral flex flex-col h-full'>
      <TopBar />
      <Board numCards={numCards}/>
      <BottomElement />
    </div>
  )
}

export default MainGame