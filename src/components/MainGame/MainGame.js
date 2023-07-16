import React, { useState } from 'react'
import TopBar from './TopBar'
import Board from './Board'
import BottomElement from './BottomElement'
import Modal from './Modal'

const MainGame = ({numCardsInGame, numCardsToShow, gameStatus, setGameStatus}) => {

  const [showModal, setShowModal] = useState(false);
  const [currentGameScore, setCurrentGameScore] = useState(0);

  return (
    <div className='bg-neutral flex flex-col h-full'>
      <TopBar />
      <Board
        numCardsInGame={numCardsInGame}
        numCardsToShow={numCardsToShow}
        setGameStatus={setGameStatus}
        currentGameScore={currentGameScore}
        setCurrentGameScore={setCurrentGameScore}
        setShowModal={setShowModal}/>
      <BottomElement />
      
      {(showModal) ? (
      <Modal
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        setShowModal={setShowModal}
        numCardsInGame={numCardsInGame}
        currentGameScore={currentGameScore}/>
      ) : (
        ''
      )}
    </div>
  )
}

export default MainGame