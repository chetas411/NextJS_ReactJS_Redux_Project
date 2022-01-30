import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import movieItemsReducer from "./movieSlice";
import thunk from "redux-thunk";

const store = createStore(movieItemsReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;