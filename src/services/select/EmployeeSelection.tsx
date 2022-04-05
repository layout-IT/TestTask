import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import style from "./EmployeeSelection.module.scss";

import { replacingARoleInTheSelectAC } from "redux/actions/replacingARoleInTheSelect";
import { employeesPosition } from "redux/selecrors";
import { ReturnComponent } from "types";

export const EmployeeSelection = (): ReturnComponent => {
  const dispatch = useDispatch();
  const currentRole = useSelector(employeesPosition);

  const handleChange = (event: SelectChangeEvent<string>): void => {
    dispatch(replacingARoleInTheSelectAC(event.target.value));
  };
  return (
    <Box className={style.box}>
      <FormControl
        style={{ minWidth: 150, color: "red" }}
        className={style.formControl}
      >
        <InputLabel className={style.inputLable}>Role</InputLabel>
        <Select
          defaultValue={currentRole}
          label="Age"
          onChange={handleChange}
          className={style.select}
        >
          <MenuItem className={style.menuItem} value="Cook">
            Cook
          </MenuItem>
          <MenuItem className={style.menuItem} value="Waiter">
            Waiter
          </MenuItem>
          <MenuItem className={style.menuItem} value="Driver">
            Driver
          </MenuItem>
          <MenuItem className={style.menuItem} value="All">
            All
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
