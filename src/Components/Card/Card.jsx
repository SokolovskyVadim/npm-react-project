import React, {useEffect, useState} from "react";

const Card = (props) => {
  const [newCardName, setNewCardName] = useState(props.cardName);

  const handleNewCardNameInput = (event) => {
    setNewCardName(event.target.value);
  }

  return (
    <div className={'card'}>
      <div className={'cardHeader'}>
        {newCardName}
      </div>
      <div className={'cardFooter'}>
        {props.cardText}
      </div>
      <input onChange={handleNewCardNameInput} value={newCardName}/>
      <button onClick={() => {
        props.showModal(
          <div>
            You shr?
            <button>Yes</button>
            <button onClick={() => {props.showModal()}}>No</button>
          </div>
        )
      }}>Click me!</button>
    </div>
  )
}

export default Card