
const GameResults = ({gameStatus}) => {
  return (
    <>
      {(gameStatus === 2) ? (
        <div>You Lost!</div>
      ) : (
        <h1>You Won!</h1>
      )}
    </>
  )
}

export default GameResults