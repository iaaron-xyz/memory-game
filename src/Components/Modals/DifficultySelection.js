import {capitalize} from '../../utils/utils'

const DifficultySelection = ({setGameStatus}) => {

  const handleDifficultyBtn = (e) => {
    console.log(e.target.value);
    setGameStatus(1);
  }

  return (
    <>
      {/* bg image */}
      <div className="difficulty-selection-bg-img w-full h-full z-0"></div>
      {/* difficult selection buttons */}
      <div className="difficulty-selection flex flex-col items-center justify-center h-full text-slate-200 z-10" id="difficulty-selection">
        <h2 className="text-6xl m-8">Choose the difficulty!</h2>
        <div className="flex m-4 text-3xl text-slate-800">
          <DifficultyButton handleDifficultyBtn={handleDifficultyBtn} difficultyLevel='easy' />
          <DifficultyButton handleDifficultyBtn={handleDifficultyBtn} difficultyLevel='medium' />
          <DifficultyButton handleDifficultyBtn={handleDifficultyBtn} difficultyLevel='hard' />
        </div>
      </div>
    </>  
  )
}

const DifficultyButton = ({handleDifficultyBtn, difficultyLevel}) => {
  return (
    <button 
      type="button"
      onClick={handleDifficultyBtn}
      className="bg-green-500 m-4 px-4 py-2 rounded-md hover:bg-white hover:text-black"
      value={difficultyLevel}>
        {capitalize(difficultyLevel)}
    </button>
  )
}

export default DifficultySelection