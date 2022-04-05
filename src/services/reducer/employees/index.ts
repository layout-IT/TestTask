import { EmployeesType } from "types";

class Employee {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,class-methods-use-this
  updateEmployee = (state: any, action: any) => ({
    ...state,
    employess: state.employess.map((employeeData: EmployeesType) =>
      employeeData.id === action.id
        ? { ...action.newEmployeeParameters }
        : { ...employeeData }
    ),
  });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,class-methods-use-this
  deleteEmployee(state: any, action: any) {
    return {
      ...state,
      employess: state.employess.filter(
        (employeeData: EmployeesType) => employeeData.id !== action.id
      ),
    };
  }
}

export default new Employee();
