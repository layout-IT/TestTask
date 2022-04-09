import { FC, useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import style from "./Table.module.scss";

import { informationAboutTheSelectedEmployeeAC } from "redux/actions";
import { employeesPosition, selectEmployess } from "redux/selecrors";
import { labelCheckboxPosition } from "redux/selecrors/labelCheckboxPosition";
import { ArrowButton } from "services";
import { sortByNameAndBirthday } from "services/functions/sortByNameAndBirthday";
import { EmployeesType, ReturnComponent } from "types";

export const TableOfEmployees: FC = (): ReturnComponent => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employess = useSelector(selectEmployess);
  const currentRole = useSelector(employeesPosition);
  const checked = useSelector(labelCheckboxPosition);

  const [changeableArrayOfWorkers, setChangeableArrayOfWorkers] =
    useState<EmployeesType[]>(employess);

  const [sortingBy, setSortingBy] = useState<string>("");

  useEffect(() => {
    if (currentRole && currentRole.toLowerCase() !== "all") {
      setChangeableArrayOfWorkers(
        employess.filter(({ role }) => role === currentRole.toLowerCase())
      );
    } else {
      setChangeableArrayOfWorkers(employess);
    }
    if (checked) {
      setChangeableArrayOfWorkers(
          changeableArrayOfWorkers.filter(
              ({ isArchive }) => isArchive === checked
          )
      );
    }
  }, [currentRole, checked]);



  useEffect(() => {
    if (sortingBy === "name") {
      const newArray = sortByNameAndBirthday(changeableArrayOfWorkers, "name");
      setChangeableArrayOfWorkers(newArray);
    }
    if (sortingBy === "reverseName") {
      const newArray = sortByNameAndBirthday(
        changeableArrayOfWorkers,
        "name",
        true
      );
      setChangeableArrayOfWorkers(newArray);
    }
    if (sortingBy === "birthay") {
      const newArray = sortByNameAndBirthday(
        changeableArrayOfWorkers,
        "birthday"
      );
      setChangeableArrayOfWorkers(newArray);
    }
    if (sortingBy === "reverseBirthday") {
      const newArray = sortByNameAndBirthday(
        changeableArrayOfWorkers,
        "birthday",
        true
      );
      setChangeableArrayOfWorkers(newArray);
    }
  }, [sortingBy]);

  const goToEditing = (employeeData: EmployeesType): void => {
    dispatch(informationAboutTheSelectedEmployeeAC(employeeData));
    navigate(`/TestTask/change/${employeeData.id}`);
  };

  return (
    <Table style={{ borderStyle: "solid", borderColor: "#6384DF"}} className={style.table}>
      <TableHead>
        <TableRow style={{ backgroundColor: "#6384DF" }}>
          <TableCell
            style={{ color: "white", fontSize: 20 }}
            className={style.tableCell}
          >
            <div className={style.itemsArrow}>
              <span className={style.title}>Name</span>
              <div className={style.container}>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div
                  className={style.item}
                  onClick={() => setSortingBy("name")}
                >
                  <ArrowButton />
                </div>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div
                  className={style.item}
                  onClick={() => setSortingBy("reverseName")}
                >
                  <ArrowButton />
                </div>
              </div>
            </div>
          </TableCell>
          <TableCell
            style={{ color: "white", fontSize: 20 }}
            className={style.title}
          >
            Role
          </TableCell>
          <TableCell
            style={{ color: "white", fontSize: 20 }}
            className={style.tableCell}
          >
            <div className={style.itemsArrow}>
              <span className={style.title}>Birthday</span>
              <div className={style.container}>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div
                  className={style.item}
                  onClick={() => setSortingBy("birthay")}
                >
                  <ArrowButton />
                </div>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div
                  className={style.item}
                  onClick={() => setSortingBy("reverseBirthday")}
                >
                  <ArrowButton />
                </div>
              </div>
            </div>
          </TableCell>
          <TableCell
            style={{ color: "white", fontSize: 20 }}
            className={style.title}
          >
            Phone
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody >
        {changeableArrayOfWorkers.map((employee) => (
          <TableRow
              className={style.tableRow}
            key={employee.id}
            style={{ cursor: "pointer"}}
            onClick={() => goToEditing({ ...employee })}
          >
            <TableCell
              style={{ fontSize: 17,}}
              align="left"
              className={style.line}
            >
              {employee.name}
            </TableCell>
            <TableCell
              style={{ fontSize: 17 }}
              align="left"
              className={style.line}
            >
              {employee.role}
            </TableCell>
            <TableCell
              style={{ fontSize: 17 }}
              align="left"
              className={style.line}
            >
              {employee.birthday}
            </TableCell>
            <TableCell
              style={{ fontSize: 17 }}
              align="left"
              className={style.line}
            >
              {employee.phone}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
