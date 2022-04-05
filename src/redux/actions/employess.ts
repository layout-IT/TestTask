import { EmployeesType } from "types/Employees";

export const getEmployeesAC = (data: EmployeesType[]) =>
  ({
    type: "GET-EMPLOYESS",
    data,
  } as const);
