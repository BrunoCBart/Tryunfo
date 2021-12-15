import React, {useContext} from 'react'
import Input from './Input'
import TryunfoContext from '../context/TryunfoContext'
import Select from './Select'
import Decks from './Decks'

function Filters() {

  const {filterName, setFilterName, onChange,
        filterRare, setFilterRare,
        filterTrunfo, setFilterTrunfo,
        saveDeck, deckName, setDeckName,
      saveDeckBtnDisabled } = useContext(TryunfoContext)

        const cardRareOptions = ['normal', 'raro', 'muito raro']

  return (
    <section className="filters-decks-section">
      <h2 className="secondary-title">Decks</h2>
      <div class="filters-decks-container">
        <div class="cardFilters-container">
        <h2>Filtros de busca</h2>
           <Input
              elementId="filterName"
              onChange={onChange}
              value={filterName}
              setCallback={setFilterName}
              type="text"
              label="Nome"
              name="filterName"
              disabled={filterTrunfo}
            />
            <Select
              onChange={onChange}
              value={filterRare}
              setCallback={setFilterRare}
              options={cardRareOptions}
              name="filterRare"
              disabled={filterTrunfo}
              elementId="cardRarity"
              label="Raridade"
            />
           <Input
              elementId="filterTrunfo"
              onChange={onChange}
              value={filterTrunfo}
              setCallback={setFilterTrunfo}
              type="checkbox"
              label="Super Trunfo"
              name="filterTrunfo"
            />
            <Input
              elementId="deckName"
              onChange={onChange}
              value={deckName}
              setCallback={setDeckName}
              type="text"
              label="Nome Deck"
              name="deckName"
            />
            <button
              className="saveDeckBtn"
              disabled={saveDeckBtnDisabled}
              onClick={saveDeck}>
              Salvar Deck
            </button>
        </div>
          <Decks/>
      </div>
    </section>
  )
}

export default Filters
