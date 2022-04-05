import { createStore, Store, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { employeesReducer } from "redux/reducers/employees";

export const rootReducer = combineReducers({
  employeesReducer,
});

export const STORE: Store<RootReducerType> = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export type RootReducerType = ReturnType<typeof rootReducer>;
