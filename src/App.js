import { useState } from "react";
import DifficultySelection from "./components/DifficultySelection/DifficultySelection";
import MainGame from "./components/MainGame/MainGame";

function App() {
  const [gameStatus, setGameStatus] = useState(0);
  const [numCardsInGame, setNumCardsInGame] = useState(0);
  const [numCardsToShow, setNumCardsToShow] = useState(0);
  const [difficulty, setDifficulty] = useState('');

  return (
    <div className="h-full">
      { (gameStatus) ? (
          <MainGame
            numCardsInGame={numCardsInGame}
            numCardsToShow={numCardsToShow}
            difficulty={difficulty}/>
        ) : (
          <DifficultySelection
            setGameStatus={setGameStatus} 
            setNumCardsInGame={setNumCardsInGame}
            setNumCardsToShow={setNumCardsToShow}
            setDifficulty={setDifficulty}/>
      )}
    </div>
  );
}

export default App;
