import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import Card from "Components/Card/Card";

const TaskList = (props) => {
  const [cardList, setCardList] = useState([
    {cardName:"1",cardText:"1"},
    {cardName:"2",cardText:"2"},
    {cardName:"2",cardText:"2"},
    {cardName:"2",cardText:"2"},
    {cardName:"4",cardText:"4"},
  ]);
  const [cardListHeader, setCardListHeader] = useState("Initial header");

  const handleCardDelete = index => () => {
    const newCardList = [...cardList];
    newCardList.splice(index, 1);
    setCardList(newCardList);
    };

  return (
    <div className={'cardList'}>
      header
      {cardList.map((taskInfo, index) =>
        <Card deleteCard={handleCardDelete(index)}
              key={index}
              showModal={props.showModal}
              cardName={taskInfo.cardName}
              cardText={taskInfo.cardText}/>
      )}
    </div>
  )
}

export default TaskList