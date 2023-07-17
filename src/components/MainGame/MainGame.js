import React, { useState } from 'react'
import TopBar from './TopBar'
import Board from './Board'
import BottomElement from './BottomElement'
import Modal from './Modal'

const MainGame = ({numCardsInGame, numCardsToShow, gameStatus, setGameStatus}) => {

  // loca storage
  let initRecord = 0;
  console.log(initRecord);
  if (!localStorage.getItem('topRecord')) {
    localStorage.setItem('topRecord', initRecord);
  }
  initRecord = localStorage.getItem('topRecord');

  // states
  const [showModal, setShowModal] = useState(false);
  const [currentGameScore, setCurrentGameScore] = useState(0);
  const [topRecord, setTopRecord] = useState(initRecord)

  const updateTopRecord = (score) => {
    if (score > localStorage.getItem('topRecord')) {
      localStorage.setItem('topRecord', score);
      setTopRecord(score);
      return true;
    }
    return false;
  }

  return (
    <div className='bg-neutral flex flex-col h-full'>
      <TopBar
        topRecord={topRecord}/>
      <Board
        numCardsInGame={numCardsInGame}
        numCardsToShow={numCardsToShow}
        setGameStatus={setGameStatus}
        currentGameScore={currentGameScore}
        setCurrentGameScore={setCurrentGameScore}
        setShowModal={setShowModal}
        updateTopRecord={updateTopRecord}/>
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