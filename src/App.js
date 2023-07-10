import { useState } from "react";
import Board from "./Components/Board/Board";
import BottomPart from "./Components/BottomPart/BottomPart";
import TopPart from "./Components/TopPart/TopPart";
import DifficultySelection from "./Components/Modals/DifficultySelection";
import GameResults from "./Components/Modals/GameResults";

function App() {
  const [difficulty, setDifficulty] = useState(0);
  // 0: difficulty-selection / 1: game-started / 2: game-finished
  const [gameStatus, setGameStatus] = useState(0);
  // 0: won game / 1: lost game / 2: no-results
  // const [gameResults, setGameResults] = useState(2);

  return (
    <div className="App flex flex-col h-full">
      {/* Game status */}
      {(gameStatus === 0) ? (
        // Difficulty selection modal
        <DifficultySelection setGameStatus={setGameStatus} difficulty={difficulty} DifficultySelection={setDifficulty}/>
        ) : (
          (gameStatus === 2) ? (
            // Game results after losing/winning
            <GameResults />
            ) : (
            // Render main game page
            <>
              <TopPart />
              <Board />
              <BottomPart />
            </>
        ))}
    </div>
  );
}

export default App;
