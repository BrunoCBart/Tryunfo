import {v4 as uuid} from 'uuid'

const gorilla = {
  cardName: 'Gorilla',
  cardDescription: 'Eats no meat, still more buff than any human.',
  cardImage: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/45/6d/45/3-days-bwindi-gorilla.jpg',
  cardAttr1: 90,
  cardAttr2: 30,
  cardAttr3: 40,
  cardRare: 'muito raro',
  cardTrunfo: false,
  cardKey: uuid()
}

const patrikBaboumian = {
  cardName: 'Patrik Baboumian',
  cardDescription: 'Strongest man in the world in 2011, same year he went vegan!',
  cardImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/PatrikBaboumian.PNG',
  cardAttr1: 90,
  cardAttr2: 70,
  cardAttr3: 45,
  cardRare: 'muito raro',
  cardTrunfo: true,
  cardKey: uuid()
}

const smollList = {
  cardName: 'Smoll List',
  cardDescription: "The list of reasons why you shouldn't be vegan.",
  cardImage: 'https://memegenerator.net/img/images/13555404/ken-jeong-small-list.jpg',
  cardAttr1: 50,
  cardAttr2: 90,
  cardAttr3: 30,
  cardRare: 'normal',
  cardTrunfo: false,
  cardKey: uuid()
}

const plantsFellPain = {
  cardName: 'Plants feel pain',
  cardDescription: "Your mind is blown by meathead logic and you loose all your braincells!",
  cardImage: 'https://memegenerator.net/img/instances/68066411.jpg',
  cardAttr1: 20,
  cardAttr2: 0,
  cardAttr3: 20,
  cardRare: 'normal',
  cardTrunfo: false,
  cardKey: uuid()
}

const cowsMilk = {
  cardName: 'Cows Milk',
  cardDescription: "Cow's milk is for baby calves, learn it alredy!",
  cardImage: 'https://media.wired.com/photos/5932532e2a990b06268a9ccc/master/w_2560%2Cc_limit/New_born_Frisian_red_white_calf.jpg',
  cardAttr1: 30,
  cardAttr2: 90,
  cardAttr3: 45,
  cardRare: 'raro',
  cardTrunfo: false,
  cardKey: uuid()
}

const veganDeck = {
  deckName: 'Vegan Deck',
  cards: [gorilla, patrikBaboumian, smollList, plantsFellPain, cowsMilk],
  key: uuid()
}

export default veganDeck;