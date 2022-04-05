import { RootReducerType } from "redux/store";
import { EmployeesType } from "types/Employees";

export const informationAboutEmployee = (
  state: RootReducerType
): EmployeesType => state.employeesReducer.informationAboutTheSelectedEmployee;
