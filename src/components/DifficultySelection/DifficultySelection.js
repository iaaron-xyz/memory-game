import {capitalize} from '../../utils/capitalize'

const DifficultySelection = ({setGameStatus, setNumCardsInGame, setNumCardsToShow}) => {

  const handleDifficultyBtn = (e) => {
    // Number of cards to display
    if (e.target.value === 'easy') {
      setNumCardsInGame(6);
      setNumCardsToShow(4);
    } else if (e.target.value === 'medium') {
      setNumCardsInGame(8);
      setNumCardsToShow(6);
    } else {
      setNumCardsInGame(10);
      setNumCardsToShow(8);
    }

    // When the button clicked change the status of the game
    setGameStatus(1);
  }

  return (
    <div className="bg-main-color flex flex-col justify-center items-center h-full">
      <h1 className="text-6xl mb-8 text-slate-50">Choose the Difficulty Level</h1>
      <div>
        <DifficultyBtn 
          difficultyLevel='easy'
          handleDifficultyBtn={handleDifficultyBtn}/>
        <DifficultyBtn 
          difficultyLevel='medium'
          handleDifficultyBtn={handleDifficultyBtn}/>
        <DifficultyBtn 
          difficultyLevel='hard'
          handleDifficultyBtn={handleDifficultyBtn}/>
      </div>
    </div>
  )
}

const DifficultyBtn = ({difficultyLevel, handleDifficultyBtn}) => {
  return (
    <button
      type="button"
      className='difficulty-btn px-4 py-2 mx-4 text-2xl rounded-lg hover:bg-slate-50 drop-shadow-sm'
      onClick={handleDifficultyBtn}
      value={difficultyLevel}
      >
      {capitalize(difficultyLevel)}
    </button>
  )
}

export default DifficultySelection