
const CardsGrid = () => {
  return (
    <div className="cards-grid grid grid-cols-3 place-items-center gap-4 bg-pink-400">
      <Card number="1" />
      <Card number="2" />
      <Card number="3" />
    </div>
  )
}

const Card = ({number}) => {
  return (
    <div className="card">
      Card {number}
    </div>
  )
}

export default CardsGrid