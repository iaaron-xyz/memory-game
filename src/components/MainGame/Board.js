import React, { useEffect, useState } from 'react'
import emojis from '../../data/emojis';

const Board = ({numCards}) => {

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
    <div className='grow flex flex-col justify-center items-center text-8xl bg-slate-600'>
      {/* Num cards: {numCards} */}
      <div className='cards-container flex justify-center items-center flex-wrap'>
        {cardsInGame.map((cardChar) => {
          console.log(cardChar);
          return (
            <div key={cardChar.code} className='justify-center items-center bg-white p-6 m-4'>
              {cardChar.emoji}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Board