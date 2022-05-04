import React, {useContext, useState} from "react";
import { ModalContext } from "HOC/GlobalModalProvider";
import { ThemeContext } from "HOC/GlobalThemeProvider";

import styled from 'styled-components';
import {Link} from "react-router-dom";

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

const EditCard = (props) => {
  return (
    <StyledCard percentDone={Math.floor(Math.random()*100)}>
        <div className={'cardHeader'}>
          {props.cardName}
        </div>
        <div className={'cardBody'}>
          Are you sure?
        </div>
        <div className={'cardFooter'}>
          <button onClick={() => {props.deleteCard()}}>Submit</button>
          <button onClick={() => {props.setModal(false)}}>Cancel</button>
        </div>
    </StyledCard>
  )
}

export default EditCard