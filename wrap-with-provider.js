import React from "react";
// Redux
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
//Music
import HomeMusic from "./src/utils/homeMusic";

// Reducers
import globalReducer from "./src/state/store";

const withProvider = ({ element }) => {
  const rootReducer = combineReducers({
    global: globalReducer,
  });
  const composedEnhancer = compose(applyMiddleware(thunkMiddleware));
  const store = createStore(rootReducer, composedEnhancer);

  return (
    <Provider store={store}>
      <HomeMusic />
      {element}
    </Provider>
  );
};

export default withProvider;