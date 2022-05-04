import React, {useContext, useEffect, useState} from "react";

import styled from 'styled-components';
import fakeServerAPI from "api/fakeServerInstance";

const StyledCard = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${props => props.theme.infoCardBackgroundColor};
  margin: 20px;
  border-radius: 5px;

  .cardHeader {
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: ${props => props.theme.accentBackgroundColor};
    font-size: 25px;
    line-height: 30px;
    color: ${props => props.theme.accentTextColor};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-family: "supermercado";
  }
  
  .cardBody {
    padding: 10px 20px;
    box-sizing: border-box;
    color: ${props => props.theme.appBaseFontColor};
  }
  
  .cardFooter {
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export type CardType = {
    cardName: string,
    cardText: string,
    cardID: number,
}

export interface CardProps {
    cardName: string,
    cardText?: string,
    cardID: number,
    deleteCard: () => void;
}

/**
 * This is single card display object
 *
 *
 * @return Card valid react component
 *
 * @param props.deleteCard callback deletes card on call
 * @example
 *
 * <Card
 * deleteCard={deleteCardCallBack(cardData)}
 * key={cardData.id}
 * cardID={cardData.id}
 * cardName={cardData.name}
 * cardText={cardData.text}
 * />
 */
const Card = (props : CardProps): React.FunctionComponent => {
    const [differentText, setDifferentText] = useState(props.cardName);

    useEffect(() => {
        fakeServerAPI.get("/tasks")
            .then((responce) => {
                setDifferentText("newText");
            })
    },[])

  return (
    <StyledCard percentDone={Math.floor(Math.random()*100)}>
      <div className={'cardHeader'}>
        {differentText}
      </div>
      <div className={'cardBody'}>
          This task is
          {props.cardText}
      </div>
        <div>
            <input placeholder={"New name input"}/>
        </div>
      <div className={'cardFooter'}>
        <button onClick={() => {props.deleteCard()}}>delete</button>
      </div>
    </StyledCard>
  )
}

export default Card