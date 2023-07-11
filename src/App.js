import { useState } from "react";
import DifficultySelection from "./components/DifficultySelection/DifficultySelection";
import MainGame from "./components/MainGame/MainGame";

function App() {
  const [gameStatus, setGameStatus] = useState(0);
  const [numCards, setNumCards] = useState(0);
  const [difficulty, setDifficulty] = useState(''); 

  return (
    <div className="h-full">
      { (gameStatus) ? (
          <MainGame numCards={numCards} difficulty={difficulty}/>
        ) : (
          <DifficultySelection
            setGameStatus={setGameStatus} 
            setNumCards={setNumCards}
            setDifficulty={setDifficulty}/>
      )}
    </div>
  );
}

export default App;
