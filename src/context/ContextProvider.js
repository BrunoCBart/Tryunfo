import React, {useState, useEffect} from 'react'
import TryunfoContext from './TryunfoContext'
import {v4 as uuid} from 'uuid'
import veganDeck from '../veganDeck';

const RESET_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

function ContextProvider({children}) {

  const [cardName, setCardName] = useState('')
  const [cardDescription, setCardDescription] = useState('')
  const [cardAttr1, setCardAttr1] = useState(0)
  const [cardAttr2, setCardAttr2] = useState(0)
  const [cardAttr3, setCardAttr3] = useState(0)
  const [cardImage, setCardImage] = useState('')
  const [cardRare, setCardRare] = useState('normal')
  const [cardTrunfo, setCardTrunfo] = useState(false)
  const [saveBtnDisabled, setSaveBtnDisabled] = useState(true)
  const [cards, setCards] = useState([])
  const [hasTrunfo, setHasTrunfo] = useState(false)
  const [filterName, setFilterName] = useState('')
  const [filterRare, setFilterRare] = useState('')
  const [filterTrunfo, setFilterTrunfo] = useState(false)
  const [deckName, setDeckName] = useState('')
  const [saveDeckBtnDisabled, setDeckBtnDisabled] = useState(true)
  const [decks, setDecks] = useState([veganDeck])

  useEffect(() => {
    if(!localStorage.getItem('decks')) {
      localStorage.setItem('decks', JSON.stringify(decks))
    }
    
    const storageDecks = JSON.parse(localStorage.getItem('decks'))

    const vDeck = storageDecks.find((deck) => deck.deckName === 'Vegan Deck')
    
    if (vDeck) {
      setDecks(storageDecks)
    } else {
      setDecks([...storageDecks, veganDeck])
    }

    if(!localStorage.getItem('cards')) {
      localStorage.setItem('cards', JSON.stringify([]))
    }

    const storageCards = JSON.parse(localStorage.getItem('cards'))
    setCards(storageCards)
  }, [])

  useEffect(() => {
    localStorage.setItem('decks', JSON.stringify([...decks]))
  },[decks])

  useEffect(() => {
    isCardSaveBtnDisabled()
    isAttributeMoreThanThreeDigits()
  }, [cardName, cardImage, cardDescription, cardAttr1, cardAttr2, cardAttr3,])

  useEffect(() => {
    isSaveDeckBtnDisabled()
  }, [deckName])

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])
  useEffect(() => {
    if (cardDescription.length === 80) {
      setCardDescription(cardDescription.substr(0, cardDescription.length - 1))
    }

    if (cardName.length === 18) {
      setCardName(cardName.substr(0, cardName.length - 1))
    }
  }, [cardName, cardDescription])

  const isSaveDeckBtnDisabled = () => {
    deckName === '' ? setDeckBtnDisabled(true) : setDeckBtnDisabled(false)
  }

  const onChange = ({target}, setCallback) => {
    const { value } = target
    if (target.name === 'cardTrunfo') return setCallback(!cardTrunfo)
    if (target.name === 'filterTrunfo') return setCallback(!filterTrunfo)
    setCallback(value)
  }

  const isAttributeMoreThanThreeDigits = () => {
    if (cardAttr1.length > 2 || cardAttr1.length < 0) setCardAttr1(0)
    if (cardAttr2.length > 2 || cardAttr1.length < 0) setCardAttr2(0) 
    if (cardAttr3.length > 2 || cardAttr1.length < 0) setCardAttr3(0) 
  }

  const checkAttributes = () => {
    const maxAttribute = 90;
    const minAttribute = 0;
    if ((cardAttr1 <= maxAttribute && cardAttr1 >= minAttribute)
      && (cardAttr2 <= maxAttribute && cardAttr2 >= minAttribute)
      && (cardAttr3 <= maxAttribute && cardAttr3 >= minAttribute)) {
      return true;
    }
    return false
  }

  const checkIfAttributesAreBiggerThan210 = () => {
    const maxAttributeSum = 210;
    return Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxAttributeSum;
  }

  const isCardSaveBtnDisabled = () => {
    const attributes = checkAttributes()
    const attributesBiggerThan210 = checkIfAttributesAreBiggerThan210()
    if (cardName
      && cardDescription
      && cardImage
      && attributes
      && !attributesBiggerThan210 
      ) return setSaveBtnDisabled(false)
    return setSaveBtnDisabled(true)
  }

  const resetState = () => {
    setCardName('')
    setCardDescription('')
    setCardAttr1(0)
    setCardAttr2(0)
    setCardAttr3(0)
    setCardImage('')
    setCardRare('normal')
    setCardTrunfo(false)
  }

  const saveCard = () => {
    const card = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      cardKey: uuid()
    };

    setCards([
      ...cards, card
    ])

    if(cardTrunfo) {
      setHasTrunfo(true)
    }
  }

  const deleteCard = (key) => {
    const newCards = cards.filter((card) => card.cardKey !== key)
    setCards(newCards)
  }

  const saveButtonSubmit = (e) => {
    e.preventDefault()
    saveCard()
    resetState()
  }

  const saveDeck = () => {
    if (deckName === '') return alert('Deck Name não pode estar vazio!')
    if (cards.length === 0) return alert('Crie uma carta!')
    const deckNameExists = decks.find((deck) => deck.deckName === deckName)
    const deck = {
      deckName,
      cards,
      key: uuid()
    }
    if (deckNameExists) {
      const replaceDeck = decks.map((deckItem) => deckItem.deckName === deckName ? deck : deckItem )
      console.log(replaceDeck)
      return setDecks(replaceDeck)
    }
    setDecks([
      ...decks,
      deck
    ])
  }

  const selectDeck = (key) => {
    const selectedDeck = decks.find((deck) => deck.key === key)
    setCards([...selectedDeck.cards])
  }

  const deleteDeck = (key) => {
    const newDecks = decks.filter((deckItem) => deckItem.key !== key)
    setDecks(newDecks)
    setCards([])
  }

  const providerValue = {
    onChange,
    cardName, setCardName,
    cardDescription, setCardDescription,
    cardAttr1, setCardAttr1,
    cardAttr2, setCardAttr2,
    cardAttr3, setCardAttr3,
    cardImage, setCardImage,
    cardRare, setCardRare,
    cardTrunfo, setCardTrunfo,
    saveBtnDisabled,
    saveButtonSubmit,
    hasTrunfo,
    cards, deleteCard,
    filterName, setFilterName,
    filterRare, setFilterRare,
    filterTrunfo, setFilterTrunfo,
    deckName, setDeckName,
    saveDeck, decks, selectDeck,
    saveDeckBtnDisabled, deleteDeck,
  }

  return (
    <TryunfoContext.Provider value={providerValue}>
      {children}
    </TryunfoContext.Provider>
  )
}

export default ContextProvider
