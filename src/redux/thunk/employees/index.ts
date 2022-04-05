import { Dispatch } from "redux";

import { getEmployeesAC, preloaderAC } from "redux/actions";
import { getEmployees } from "services/api/employess";

export const getEmployessTC =
  () =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(preloaderAC(true));
    try {
      const responce = await getEmployees();
      dispatch(getEmployeesAC(responce));
    } catch (e) {
      console.log("error, no data available");
    } finally {
      dispatch(preloaderAC(false));
    }
  };
