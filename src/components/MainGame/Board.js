import React, { useEffect, useState } from 'react'
import emojis from '../../data/emojis';
import getRandomSubArray from '../../utils/getRandomSubArray';

const Board = ({numCardsInGame, numCardsToShow, difficulty}) => {

  const [cardsInGame, setCardsInGame] = useState([]);
  const [cardsToShow, setCardstoShow] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  const handleCardSelection = (e) => {
    // Check if the selected card was repeated. Finish the game if so
    const repeatedPick = pickedCards.find(card => e.target.id === card.name);
    if (repeatedPick) {
      // TODO: Implement game over component
      console.log('Game Over');
      return;
    }

    // Else add the picked card to pickedCards
    setPickedCards([...pickedCards, cardsInGame.find(card => e.target.id === card.name)]);
    // Remove the picked card from available cards
    const updatedAvailableCards = cardsInGame.filter(card => e.target.id !== card.name);
    // Shuffle all cards (picked and non-picked) available cards
    const newRoundCardsToShow = getRandomSubArray(updatedAvailableCards.concat(pickedCards), numCardsToShow);
    
    // update states and start a new round
    setCardsInGame(updatedAvailableCards);
    setCardstoShow(newRoundCardsToShow);
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
              <Card key={cardChar.code} name={cardChar.name} emoji={cardChar.emoji} handleCardSelection={handleCardSelection}/>
            )
          })}
        </div>
      ) : (
        <div className='cards-container-2 border border-1 border-purple-800'>
          {cardsToShow.map((cardChar) => {
            return (
              <Card key={cardChar.code} emoji={cardChar.emoji} handleCardSelection={handleCardSelection}/>
            )
          })}
        </div>
      )}
      
    </div>
  )
}

const Card = ({name, emoji, handleCardSelection}) => {
  return (
    <div 
      className='card flex justify-center items-center bg-white px-6 pb-4 m-4'
      id={name}
      onClick={handleCardSelection}>
      {emoji}
    </div>
  )
}

export default Board