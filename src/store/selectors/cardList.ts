import {RootState} from "../initStore";

export const cardListSelector = (store : RootState) => store.cardListState.cardList;

