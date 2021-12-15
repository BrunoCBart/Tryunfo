import React, {useContext} from 'react'
import TryunfoContext from '../context/TryunfoContext'
import Card from './Card'

function Cards() {
  const { cards, filterName, filterRare, filterTrunfo, deleteCard } = useContext(TryunfoContext)
  console.log(cards)
  return (
    <section className="cards-Section">
      <h2 className="secondary-title">Cards</h2>
      <div className="cards-container">
        {cards.filter((card) => {
          if(filterTrunfo) return card.cardTrunfo
          return card.cardRare.includes(filterRare) && card.cardName.includes(filterName)
        }).map(({cardName, cardImage, cardDescription, cardKey,
      cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo}) => (
        <div className="d-flex">
          <Card
          cardName={cardName}
          cardImage={cardImage}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
        />
          <button className="deleteBtn" onClick={ () => deleteCard(cardKey)}>Excluir</button>
        </div>
        ))}
      </div>
    </section>
  )
}

export default Cards
