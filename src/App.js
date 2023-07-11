import { useState } from "react";
import DifficultySelection from "./components/DifficultySelection/DifficultySelection";
import MainGame from "./components/MainGame/MainGame";

function App() {
  const [gameStatus, setGameStatus] = useState(0);
  const [numCards, setNumCards] = useState(0);
  const [difficulty, setDifficulty] = useState(''); 

  return (
    <>
      { (gameStatus) ? (
          <MainGame numCards={numCards}/>
        ) : (
          <DifficultySelection
            setGameStatus={setGameStatus} 
            setNumCards={setNumCards}
            setDifficulty={setDifficulty}/>
      )}
    </>
  );
}

export default App;
