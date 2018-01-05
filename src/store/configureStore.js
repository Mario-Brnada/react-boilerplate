import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import aauthReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      auth: aauthReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};




