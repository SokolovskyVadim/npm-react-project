import React, {useContext, useEffect, useState} from "react";

import styled from 'styled-components';
import {useLocation, useNavigate, useParams} from "react-router-dom";

const StyledLoginHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .loginCard{
    width: 400px;
    height: 300px;
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
  }
`

const ExpandedCard = (props) => {
  const [cardName, setCardName] = useState();
  const params = useParams();

  return (
    <StyledLoginHolder>
      <div className={"loginCard"}>
        <div className={'cardHeader'}>
          Card ID {params.taskID}
        </div>
        <div className={'cardBody'}>
          <input
            value={cardName}
            onChange={(event) => {setCardName(event.target.value)}}
          />
        </div>
        <div className={'cardFooter'}>
          <button onClick={() => {}}>
            Submit
          </button>
          <button onClick={() => {}}>
            Cancel
          </button>
        </div>
      </div>
    </StyledLoginHolder>
  )
}

export default ExpandedCard