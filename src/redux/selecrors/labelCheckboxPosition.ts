import { RootReducerType } from "redux/store";

export const labelCheckboxPosition = (state: RootReducerType): boolean =>
  state.employeesReducer.isArchive;
