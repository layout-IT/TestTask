export const deleteEmployeeInformationAC = (id: number) =>
  ({
    type: "DELETE-EMPLOYEE-INFORMATION",
    id,
  } as const);
