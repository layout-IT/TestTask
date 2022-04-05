import { RootReducerType } from "redux/store";

export const employeesPosition = (state: RootReducerType): string =>
  state.employeesReducer.role;
