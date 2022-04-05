import { EmployeesType } from "types";

export const addChangesToEmployeeInformationAC = (
  newEmployeeParameters: EmployeesType,
  id: number
) =>
  ({
    type: "ADD-CHANGE-TO-EMPLOYEE-INFORMATION",
    newEmployeeParameters,
    id,
  } as const);
