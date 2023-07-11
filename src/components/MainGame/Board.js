import React, { useEffect, useState } from 'react'
import emojis from '../../data/emojis';

const Board = ({numCards, difficulty}) => {

  const [cardsInGame, setCardsInGame] = useState([]);
  
  useEffect(() => {
    const selectCardSymbols = () => {
      const selectedSymbols = [];
      // const indices = [];

      for (let symbol = 0; symbol < numCards; symbol += 1) {
        selectedSymbols.push(emojis[symbol]);
      }

      setCardsInGame(selectedSymbols);
    }

    selectCardSymbols();
  }, [numCards])

  return (
    <div className='grow flex flex-col justify-center items-center'>
      
      {(numCards <= 6) ? (
        <div className='cards-container-1 flex justify-center items-center flex-wrap border border-1 border-purple-800'>
          {cardsInGame.map((cardChar) => {
            console.log(numCards);
            return (
              <div key={cardChar.code} className='card flex justify-center items-center bg-white px-6 pb-4 m-4'>
                {cardChar.emoji}
              </div>
            )
          })}
        </div>
      ) : (
        <div className='cards-container-2 border border-1 border-purple-800'>
          {cardsInGame.map((cardChar) => {
            console.log(numCards);
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