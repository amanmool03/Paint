import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

const middleware = [logger];
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.dispatch({ type: "TEST_ACTION" });
export default store;
