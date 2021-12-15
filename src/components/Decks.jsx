import React, {useContext} from 'react'
import TryunfoContext from '../context/TryunfoContext'

function Decks() {


  const {decks, selectDeck, deleteDeck} = useContext(TryunfoContext)
  return (
    <section className="decks">
      <div className="decks-container">
        {decks.map((deck) => (
          <div>
            <div style={{ backgroundImage: `url(${deck.cards[0].cardImage})` }}
            className="deck" onClick={() => selectDeck(deck.key)}>
              <div class="deckContent">
                <h3>{deck.deckName}</h3>
              </div>
            </div>
            <button className="deleteBtn" onClick={() => deleteDeck(deck.key)} >Excluir</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Decks
