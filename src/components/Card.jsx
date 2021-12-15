import React from 'react'


function Card({cardName, cardImage, cardDescription,
  cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo}) {
  return (
    <div className="card">
        <h2 className="cardName">{cardName}</h2>
        <div className="cardImage-container">
          <img
            className="cardImage"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <div className="cardInfo-container">
          <div className="cardInfo-content">
            <p
              className="cardDescription"
            >
              { cardDescription }
            </p>
          </div>
          <div className="cardAttribute-container" >
            <p className="cardAttribute">{cardAttr1}</p>
            <p className="cardAttribute">{cardAttr2}</p>
            <p className="cardAttribute">{cardAttr3}</p>
          </div>
            <div className="cardAtt-container">
              <p className="cardAtt">........Str</p>
              <p className="cardAtt">........Int</p>
              <p className="cardAtt">.......Agi</p>
            </div>
        </div>
        <div className="cardRare-container">
          {!cardTrunfo ? '' : <span>Super Trunfo</span>}
          <div></div><p className="cardRarity">{cardRare}</p></div>
      </div>
  )
}

export default Card
