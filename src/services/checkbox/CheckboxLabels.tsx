import { FC } from "react";

import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import style from "./CheckboxLabels.module.scss";

import { changingTheArchiveSwitchAC } from "redux/actions";
import { labelCheckboxPosition } from "redux/selecrors/labelCheckboxPosition";
import { ReturnComponent } from "types";

export const CheckboxLabels: FC = (): ReturnComponent => {
  const checked = useSelector(labelCheckboxPosition);
  const dispatch = useDispatch();
  const handleChange = (event: any): void => {
    dispatch(changingTheArchiveSwitchAC(event.target.checked));
  };
  return (
    <FormGroup className={style.formGroup}>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="In the archive"
        onChange={handleChange}
        checked={checked}
        className={style.label}
      />
    </FormGroup>
  );
};
