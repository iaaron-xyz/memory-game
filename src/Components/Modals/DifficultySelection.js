
const DifficultySelection = ({setGameStatus}) => {

  const handleDifficultySelection = (e) => {
    const dialogDifficultySelection = document.getElementById('difficulty-selection');
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
            <button type="button" onClick={handleDifficultySelection} className="bg-emerald-500 m-4 px-4 py-2 rounded-md hover:bg-white hover:text-black" value="easy">Easy</button>
            <button type="button" onClick={handleDifficultySelection} className="bg-yellow-300 m-4 px-4 py-2 rounded-md hover:bg-white hover:text-black" value="medium">Medium</button>
            <button type="button" onClick={handleDifficultySelection} className="bg-rose-600 m-4 px-4 py-2 rounded-md hover:bg-white hover:text-black" value="hard">Hard</button>
          </div>
      </div>
    </>  
  )
}

export default DifficultySelection