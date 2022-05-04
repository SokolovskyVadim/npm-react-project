import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import fakeServerAPI from "../../api/fakeServerInstance";


export const replaceCardList = createAction("ReplaceCardList");

export const deleteCardStart = createAction("DeleteCardStart");
export const deleteCardSuccess = createAction("DeleteCardSuccess");


export const deleteCard = createAsyncThunk<
    MyData,
    number,
    {
        dispatch: AppDispatch
        state: State
        extra: {
            jwt: string
        }
    }
    >(
  'deleteCard',
  async (cardID, thunkAPI) => {
    const response = await fakeServerAPI.delete(`/tasks/${cardID}`);
    thunkAPI.dispatch(addItemToList(response))
      const numberVar: number = 12;
    return numberVar
  }
);