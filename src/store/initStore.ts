import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit'

import {persistStore, persistReducer, createMigrate} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { enableES5 } from 'immer';
enableES5();

import rootReducer from "./reducers/rootReducer"

const persistConfig = {
  key: 'root',
  storage,
  version: 0,
}

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);