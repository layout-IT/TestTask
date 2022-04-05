import { EmployeesType } from "types";

export const addNewEmployeeAC = (employeeParameters: EmployeesType) =>
  ({
    type: "ADD-NEW-EMPLOYEE-AC",
    employeeParameters,
  } as const);
