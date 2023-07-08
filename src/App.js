import Board from "./Components/Board/Board";
import BottomPart from "./Components/BottomPart/BottomPart";
import TopPart from "./Components/TopPart/TopPart";

function App() {
  return (
    <div className="App flex flex-col h-full">
      <TopPart />
      <Board />
      <BottomPart />
    </div>
  );
}

export default App;
