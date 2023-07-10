import cards from '../../data';

const CardsGrid = () => {
  return (
    <div className={`cards-grid grid grid-cols-4 gap-4`}>
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