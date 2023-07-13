import React from 'react'
import TopBar from './TopBar'
import Board from './Board'
import BottomElement from './BottomElement'

const MainGame = ({numCardsInGame, numCardsToShow, difficulty}) => {
  return (
    <div className='bg-neutral flex flex-col h-full'>
      <TopBar />
      <Board numCardsInGame={numCardsInGame} numCardsToShow={numCardsToShow} difficulty={difficulty}/>
      <BottomElement />
    </div>
  )
}

export default MainGame