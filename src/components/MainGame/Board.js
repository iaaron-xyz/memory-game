import React, { useEffect, useState } from 'react'
import emojis from '../../data/emojis';
import getRandomSubArray from '../../utils/getRandomSubArray';
import randomizeArray from '../../utils/randomizeArray';

const Board = ({numCardsInGame, numCardsToShow, setGameStatus, currentGameScore, setCurrentGameScore, setShowModal}) => {

  const [cardsInGame, setCardsInGame] = useState([]);
  const [cardsToShow, setCardstoShow] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  const shuffleNextRoundCards = (availableCardsArr, pickedCardsArr) => {
    const copyAvailableCardsArr = [...availableCardsArr];
    let selectedCards = [];
    // set a random integer between 1 and numCardsToShow
    const availableRandCards = Math.min(Math.floor(Math.random() * (copyAvailableCardsArr.length))+1, numCardsToShow);
    // randomize available cards
    randomizeArray(copyAvailableCardsArr);
    // add a number of RandomAvailableCards of nonpicked cards to selectedCards
    for (let i = availableRandCards; i > 0; i -= 1) {
      const item = copyAvailableCardsArr.pop()
      selectedCards.push( item );
    }
    // complement selectedCards array if not complete
    if (selectedCards.length < numCardsToShow) {
      const mergedarrays = copyAvailableCardsArr.concat(pickedCardsArr);
      const complementCards = getRandomSubArray(
        mergedarrays,
        numCardsToShow-selectedCards.length);
      
      selectedCards = selectedCards.concat(complementCards);
    }
    return selectedCards;
  }

  const handleCardSelection = (e) => {
    // Game over if card is clicked twice
    const repeatedPick = pickedCards.find(card => e.target.id === card.name);
    if (repeatedPick) {
      console.log('Game Over');
      setGameStatus(2);
      setShowModal(true);
      return;
    }

    // Add the picked card to pickedCards
    const updatedPickedCards = [...pickedCards, cardsInGame.find(card => e.target.id === card.name)];
    // Remove the picked card from available cards
    const updatedAvailableCards = cardsInGame.filter(card => e.target.id !== card.name);
    
    // The game is won if there are no more available cards to pick
    console.log(updatedAvailableCards);
    if (updatedAvailableCards.length === 0) {
      setCurrentGameScore(currentGameScore+1);
      setPickedCards(updatedPickedCards);
      setCardsInGame(updatedAvailableCards);
      console.log('You won!');
      setGameStatus(3);
      setShowModal(true);
      return;
    }

    // Shuffle all cards (picked and non-picked) available cards
    const updatedCardsToShow = shuffleNextRoundCards(updatedAvailableCards, updatedPickedCards);
    // update states and start a new round
    setCurrentGameScore(currentGameScore+1);
    setPickedCards(updatedPickedCards);
    setCardsInGame(updatedAvailableCards);
    setCardstoShow(updatedCardsToShow);
    
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
      
      <CardsContainer
        numCardsToShow={numCardsToShow}
        cardsToShow={cardsToShow}
        handleCardSelection={handleCardSelection}/>
      
      <CurrentScore 
        currentGameScore={currentGameScore} />
      
    </div>
  )
}

const CardsContainer = ({numCardsToShow, cardsToShow, handleCardSelection}) => {
  return (
    <>
      {(numCardsToShow <= 6) ? (
        <div className='cards-container-1 flex justify-center items-center flex-wrap border border-1 border-purple-800'>
          {cardsToShow.map((cardChar) => {
            return (
              <Card 
                key={cardChar.code}
                name={cardChar.name}
                emoji={cardChar.emoji}
                handleCardSelection={handleCardSelection}/>
            )
          })}
        </div>
      ) : (
        <div className='cards-container-2 border border-1 border-purple-800'>
          {cardsToShow.map((cardChar) => {
            return (
              <Card 
                key={cardChar.code} 
                name={cardChar.name} 
                emoji={cardChar.emoji} 
                handleCardSelection={handleCardSelection}/>
            )
          })}
        </div>
      )}
    </>
  )
}

const Card = ({name, emoji, handleCardSelection}) => {
  return (
    <div 
      className='card flex justify-center items-center bg-white px-6 pb-4 m-4 cursor-pointer'
      id={name}
      onClick={handleCardSelection}>
        {emoji}
    </div>
  )
}

const CurrentScore = ({currentGameScore}) => {
  return (
    <div className='text-4xl text-center'>
      Current score:
      <br />
      <h3 className='text-6xl'>
        {currentGameScore}
      </h3>
    </div>
  )
}

export default Board