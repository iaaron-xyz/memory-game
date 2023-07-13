import React, { useEffect, useState } from 'react'
import emojis from '../../data/emojis';
import getRandomSubArray from '../../utils/getRandomSubArray';

const Board = ({numCardsInGame, numCardsToShow, difficulty}) => {

  const [cardsInGame, setCardsInGame] = useState([]);
  const [cardsToShow, setCardstoShow] = useState([]);

  const shuffleAvailableCards = (cardsList) => {
    setCardstoShow(getRandomSubArray(cardsList, numCardsToShow));
  }

  // Set the initial numbersa of cards to play with
  useEffect(() => {
    const initCardsInGame = () => {
      // select a number of sybols for cards given the difficulty/numCardsInGame
      const totalCards = getRandomSubArray(emojis, numCardsInGame);
      // set states
      setCardsInGame(totalCards);
      setCardstoShow(getRandomSubArray(totalCards, numCardsToShow));
    }
    initCardsInGame();
  }, [numCardsInGame])

  return (
    <div className='grow flex flex-col justify-center items-center'>
      
      {(numCardsToShow <= 6) ? (
        <div className='cards-container-1 flex justify-center items-center flex-wrap border border-1 border-purple-800'>
          {cardsToShow.map((cardChar) => {
            return (
              <div key={cardChar.code} className='card flex justify-center items-center bg-white px-6 pb-4 m-4'>
                {cardChar.emoji}
              </div>
            )
          })}
        </div>
      ) : (
        <div className='cards-container-2 border border-1 border-purple-800'>
          {cardsToShow.map((cardChar) => {
            return (
              <div key={cardChar.code} className='card flex justify-center items-center bg-white px-6 pb-4 m-4'>
                {cardChar.emoji}
              </div>
            )
          })}
        </div>
      )}
      
    </div>
  )
}

export default Board