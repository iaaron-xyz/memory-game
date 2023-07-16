import React, { useState } from 'react'
import TopBar from './TopBar'
import Board from './Board'
import BottomElement from './BottomElement'
import Modal from './Modal'

const MainGame = ({numCardsInGame, numCardsToShow, gameStatus, setGameStatus}) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='bg-neutral flex flex-col h-full'>
      <TopBar />
      <Board
        numCardsInGame={numCardsInGame}
        numCardsToShow={numCardsToShow}
        setGameStatus={setGameStatus}
        setShowModal={setShowModal}/>
      <BottomElement />
      
      {(showModal) ? (
      <Modal
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        setShowModal={setShowModal}/>
      ) : (
        ''
      )}
    </div>
  )
}

export default MainGame