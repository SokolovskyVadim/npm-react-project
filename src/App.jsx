import React from "react";
import MainLayout from "Layouts/MainLayout/MainLayout";
import GlobalModalProvider from "HOC/GlobalModalProvider";
import GlobalThemeProvider from "./HOC/GlobalThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store, persistor} from "./store/initStore";
import { PersistGate } from 'redux-persist/integration/react'
import connectStoreToFakeServerAPI from "api/connectStoreToFakeServerAPI";

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null} onBeforeLift={() => {connectStoreToFakeServerAPI(store)}}>
          <BrowserRouter>
            <GlobalThemeProvider>
              <GlobalModalProvider>
                <MainLayout/>
              </GlobalModalProvider>
            </GlobalThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;