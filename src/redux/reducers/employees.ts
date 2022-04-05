import {
  addChangesToEmployeeInformationAC,
  addNewEmployeeAC,
  changingTheArchiveSwitchAC,
  deleteEmployeeInformationAC,
  getEmployeesAC,
  informationAboutTheSelectedEmployeeAC,
  preloaderAC,
} from "redux/actions";
import { replacingARoleInTheSelectAC } from "redux/actions/replacingARoleInTheSelect";
import Employees from "services/reducer/employees";
import { EmployeesType } from "types/Employees";

export type InitialStateType = typeof initialState;
export const initialState = {
  employess: [] as EmployeesType[],
  preloaderStatus: false,
  role: "",
  isArchive: false,
  informationAboutTheSelectedEmployee: {} as EmployeesType,
};

export const employeesReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "GET-EMPLOYESS":
      return { ...state, employess: action.data };
    case "PRELOADER":
      return { ...state, preloaderStatus: action.status };
    case "REPLACING-A-ROLE-IN-THE-SELECT":
      return {
        ...state,
        role: action.role,
      };
    case "CHANGING-THE-ARCHIVE-SWITCH":
      return {
        ...state,
        isArchive: action.switching,
      };
    case "ADD-NEW-EMPLOYEE-AC":
      return {
        ...state,
        employess: [...state.employess, action.employeeParameters],
      };
    case "INFORMATION-ABOUY-THE-SELECTED-EMPLOYEE":
      return {
        ...state,
        informationAboutTheSelectedEmployee:
          action.informationAboutTheSelectedEmployee,
      };
    case "ADD-CHANGE-TO-EMPLOYEE-INFORMATION":
      return Employees.updateEmployee(state, action);
    case "DELETE-EMPLOYEE-INFORMATION":
      return Employees.deleteEmployee(state, action);
    default:
      return state;
  }
};
export type ActionType =
  | ReturnType<typeof getEmployeesAC>
  | ReturnType<typeof preloaderAC>
  | ReturnType<typeof replacingARoleInTheSelectAC>
  | ReturnType<typeof changingTheArchiveSwitchAC>
  | ReturnType<typeof addNewEmployeeAC>
  | ReturnType<typeof informationAboutTheSelectedEmployeeAC>
  | ReturnType<typeof addChangesToEmployeeInformationAC>
  | ReturnType<typeof deleteEmployeeInformationAC>;
