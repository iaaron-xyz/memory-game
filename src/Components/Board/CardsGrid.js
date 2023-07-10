import cards from '../../data';

const CardsGrid = () => {
  const numCards = cards.length;
  return (
    <div className={`cards-grid grid grid-cols-${numCards} gap-4 bg-pink-400`}>
      {cards.map((card) => {
        return (
          <Card key={card.id} imgPath={card.img} name={card.name}/>
        )
      })}
    </div>
  )
}

const Card = ({imgPath, name}) => {
  return (
    <div className="card">
      <img src={imgPath} alt={name} />
    </div>
  )
}

export default CardsGrid