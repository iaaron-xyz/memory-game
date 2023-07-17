import { useState } from "react";
import DifficultySelection from "./components/DifficultySelection/DifficultySelection";
import MainGame from "./components/MainGame/MainGame";

function App() {
  // game status -> 0: not-started, 1: started, 2: lost-game, 3:win-game
  const [gameStatus, setGameStatus] = useState(0);
  // cards the player has to choose
  const [numCardsInGame, setNumCardsInGame] = useState(0);
  // cards to be displayed each turn
  const [numCardsToShow, setNumCardsToShow] = useState(0);

  return (
    <div className="h-full lilita">
      { (gameStatus) ? (
          <MainGame
            numCardsInGame={numCardsInGame}
            numCardsToShow={numCardsToShow}
            gameStatus={gameStatus}
            setGameStatus={setGameStatus}/>
        ) : (
          <DifficultySelection
            setGameStatus={setGameStatus} 
            setNumCardsInGame={setNumCardsInGame}
            setNumCardsToShow={setNumCardsToShow}/>
      )}
    </div>
  );
}

export default App;
