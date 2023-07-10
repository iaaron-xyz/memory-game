import { useState } from 'react';
import CardsGrid from './CardsGrid';

const Board = () => {
  const [score, setScore] = useState(0);
  return (
    <div className="grow flex flex-col items-center justify-center bg-pink-300">
      <CardsGrid />
      <div className='mt-4 p-4'>
        Score: {score}
      </div>
    </div>
  )
}

export default Board