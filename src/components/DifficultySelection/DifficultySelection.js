
const DifficultySelection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-blue-600 h-full">
      <h1 className="text-6xl mb-8 text-slate-50 z-10">Choose the Difficulty Level</h1>
      <div className="z-10">
        <DifficultyBtn difficultyLevel='easy' bgColor='lime'/>
        <DifficultyBtn difficultyLevel='medium' bgColor='yellow'/>
        <DifficultyBtn difficultyLevel='hard' bgColor='rose'/>
      </div>
    </div>
  )
}

const DifficultyBtn = ({difficultyLevel, bgColor}) => {
  return (
    <button
      type="button"
      className='difficulty-btn px-4 py-2 mx-4 text-2xl rounded-lg hover:bg-slate-50 drop-shadow-sm'
      >
      {difficultyLevel}
    </button>
  )
}

export default DifficultySelection