import React, {useContext} from 'react'
import Input from './Input'
import Select from './Select'
import TryunfoContext from '../context/TryunfoContext'
import Card from './Card'

function CardForm() {

  const { 
      onChange, cardName, setCardName,
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
    } = useContext(TryunfoContext)


    const cardRareOptions = ['normal', 'raro', 'muito raro']
  return (
    <>
      <header>
        <h1>Tryunfo</h1>
      </header>
      <section className="formCard-container">
        <div className="form-container">
          <form>
            <Input
              elementId="cardName"
              onChange={onChange}
              value={cardName}
              setCallback={setCardName}
              type="text"
              label="Nome"
              name="CardName"
            />
            <Input
              elementId="cardDescription"
              onChange={onChange}
              value={cardDescription}
              setCallback={setCardDescription}
              type="text"
              label="Descrição"
              name="CardDescription"
            />
            <Input
              elementId="cardAttr1"
              onChange={onChange}
              value={cardAttr1}
              setCallback={setCardAttr1}
              type="number"
              label="Attr1"
              name="cardAttr1"
              attr={true}
            />
            <Input
              elementId="cardAttr2"
              onChange={onChange}
              value={cardAttr2}
              setCallback={setCardAttr2}
              type="number"
              label="Attr2"
              name="cardAttr2"
              attr={true}
            />
              <Input
              elementId="cardAttr3"
              onChange={onChange}
              value={cardAttr3}
              setCallback={setCardAttr3}
              type="number"
              label="Attr3"
              name="cardAttr3"
              attr={true}
            />
              <Input
              elementId="cardImage"
              onChange={onChange}
              value={cardImage}
              setCallback={setCardImage}
              type="text"
              label="Imagem"
              name="cardImage"
            />
            <Select
              onChange={onChange}
              value={cardRare}
              setCallback={setCardRare}
              options={cardRareOptions}
              elementId="cardRare"
              label="Raridade"
            />
            <Input
              onChange={onChange}
              value={cardTrunfo}
              setCallback={setCardTrunfo}
              type="checkbox"
              label="Carta Super Trunfo"
              name="cardTrunfo"
              disabled={hasTrunfo}
              elementId="cardTrunfo"
            />
          </form>
          <button 
            onClick={ (e) => saveButtonSubmit(e)} 
            disabled={saveBtnDisabled}
            className="saveBtn"
          >
            Salvar
          </button>
        </div>
        <div class="card-container">
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
        </div>
      </section>
    </>
  )
}

export default CardForm

