import CardsGrid from './CardsGrid';

const Board = () => {
  return (
    <div className="grow flex flex-col items-center justify-center bg-pink-300">
      <CardsGrid />
      <div className='mt-4 p-4 bg-pink-400'>
        Score: N
      </div>
    </div>
  )
}

export default Board