import { FC } from "react";

import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import style from "App.module.scss";
import { TableOfEmployees } from "components/table";
import { selectPreloaderStatus } from "redux/selecrors";
import { EmployeeSelection, Preloader } from "services";
import { CheckboxLabels } from "services/checkbox";
import { ReturnComponent } from "types";

export const EmployeeManagement: FC = (): ReturnComponent => {
  const navigate = useNavigate();

  const preloader = useSelector(selectPreloaderStatus);
  const openTheFormForAddingAnEmployee = (): void => {
    navigate("/TestTask/add");
  };
  return (
    <div className={style.wrapper}>
      {preloader ? (
        <Preloader />
      ) : (
        <div className={style.contaiber}>
          <div className={style.items}>
            <EmployeeSelection />
            <CheckboxLabels />
            <Button
              className={style.button}
              onClick={() => openTheFormForAddingAnEmployee()}
              variant="contained"
              style={{ backgroundColor: "#6384DF" }}
            >
              Add new employee
            </Button>
          </div>
          <TableOfEmployees />
        </div>
      )}
    </div>
  );
};
