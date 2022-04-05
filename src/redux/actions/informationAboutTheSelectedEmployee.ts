import { EmployeesType } from "types";

export const informationAboutTheSelectedEmployeeAC = (
  informationAboutTheSelectedEmployee: EmployeesType
) =>
  ({
    type: "INFORMATION-ABOUY-THE-SELECTED-EMPLOYEE",
    informationAboutTheSelectedEmployee,
  } as const);
