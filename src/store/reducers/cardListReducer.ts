import { createReducer } from "@reduxjs/toolkit";
import { replaceCardList, deleteCard } from "../actions/cardList";
import Card, {CardType} from "Components/Card/Card";

interface cardListInitialState {
  cardList: Array<CardType>,
  isEdited:boolean,
}

const initialState : cardListInitialState = {
    cardList: null,
    isEdited:false,
}

const cardReducer = createReducer (initialState, (builder => {
  builder
  .addCase(replaceCardList, (state, action) => {
    state.cardList = action.payload;
  })
  .addCase(deleteCard.fulfilled, (state, action) => {
    const card = state.cardList.find(card => card.id === action.payload);
    const cardIndex = state.cardList.indexOf(card);
    const newCardList = [...state.cardList];
    newCardList.splice(cardIndex, 1);
    state.cardList = newCardList;
  })
  .addCase("matchedAction", (state, action) => {
    state.cardList = state.cardList;
  })
}));

export default cardReducer

