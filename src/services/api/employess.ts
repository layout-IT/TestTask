import data from "../../assets/ArrayWithEmployeeData/employees.json";

import { EmployeesType } from "types";

const setTimeoutTriggerTimeToResolveEmployess = 1500;
export const getEmployees = (): Promise<EmployeesType[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, setTimeoutTriggerTimeToResolveEmployess);
  });
