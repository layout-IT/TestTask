import moment from "moment";

import { EmployeesType } from "types";

export const sortByNameAndBirthday = (
  array: EmployeesType[],
  field: "name" | "birthday",
  reverse: boolean = false
): EmployeesType[] => {
  const theReturnedOneAfterSorting = 1;
  const theReturnedMinusOneAfterSorting = -1;
  const returnedZeroAfterSorting = 0;

  const obj: { [key: string]: (a: any, b: any) => number } = {
    name: (a: any, b: any): number => {
      if (a.name < b.name) return theReturnedMinusOneAfterSorting;
      if (a.name > b.name) return theReturnedOneAfterSorting;
      return returnedZeroAfterSorting;
    },
    birthday: (a: any, b: any): number =>
      // @ts-ignore
      moment(a.birthday, "DD.MM.YYYY") - moment(b.birthday, "DD.MM.YYYY"),
  };

  const sortCallback = obj[field];
  if (reverse) return [...array].sort(sortCallback).reverse();

  return [...array].sort(sortCallback);
};
