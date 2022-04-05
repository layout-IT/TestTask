import { RootReducerType } from "redux/store";
import { EmployeesType } from "types/Employees";

export const selectEmployess = (state: RootReducerType): EmployeesType[] =>
  state.employeesReducer.employess;
