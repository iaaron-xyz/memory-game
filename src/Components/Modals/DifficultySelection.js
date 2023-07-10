
const DifficultySelection = ({setGameStatus}) => {

  const handleDifficultySelection = (e) => {
    const dialogDifficultySelection = document.getElementById('difficulty-selection');
    console.log(e.target.value);
    dialogDifficultySelection.close();
    setGameStatus(1);
  }

  return (
    <dialog id="difficulty-selection" open>
      <h2>Choose the difficulty!</h2>
      <div className="grid grid-cols-3 gap-6">
        <button type="button" onClick={handleDifficultySelection} value="easy">Easy</button>
        <button type="button" onClick={handleDifficultySelection} value="medium">Medium</button>
        <button type="button" onClick={handleDifficultySelection} value="hard">Hard</button>
      </div>
    </dialog>
  )
}

export default DifficultySelection