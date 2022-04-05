import { RootReducerType } from "redux/store";

export const selectPreloaderStatus = (state: RootReducerType): boolean =>
  state.employeesReducer.preloaderStatus;
