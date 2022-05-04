import {userLoggedOut} from "store/actions/user";
import {gotApiError} from "store/actions/globaAppStateActions";
import fakeServerAPI from "./fakeServerInstance";


const connectStoreToFakeServerAPI = (store) => {
  fakeServerAPI.interceptors.request.use((request) => {
      console.log("interceptor request success", request);
      request.headers.acces = store.getState().user.isLoggedIn;
      return request
    },
    (error) => {
      console.log("interceptor request error", error);
    }
  );

  fakeServerAPI.interceptors.response.use(
    (responce) => {
      console.log("interceptor respone success", responce);
      return responce
    },
    (error) => {
      console.log("interceptor respone error", error);
      if (error.code === 401) {
        store.dispatch(userLoggedOut({logOutReason:"session time out"}));
      } else {
        store.dispatch(gotApiError(error));
      }
    }
  )
}

export default connectStoreToFakeServerAPI