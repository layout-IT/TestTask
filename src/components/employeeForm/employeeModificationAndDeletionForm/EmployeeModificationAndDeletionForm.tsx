import { FC, useState } from "react";

import { Field, Form, Formik } from "formik";
import PhoneInput from "react-phone-number-input/input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import style from "components/employeeForm/employeeAddForm/EmployeeAddForm.module.scss";
import {
  addChangesToEmployeeInformationAC,
  deleteEmployeeInformationAC,
} from "redux/actions";
import { informationAboutEmployee } from "redux/selecrors";
import { convertTheFormatToDDMMYYYY } from "services/functions/convertTheFormatToDDMMYYYY";
import { convertTheFormatToYYYYMMDD } from "services/functions/convertTheFormatToYYYYMMDD";
import { convertThePhone } from "services/functions/convertThePhone";
import { ReturnComponent } from "types";

export const EmployeeModificationAndDeletionForm: FC = (): ReturnComponent => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role, phone, name, isArchive, id, birthday } = useSelector(
    informationAboutEmployee
  );

  const [employeeId, setEmployeeId] = useState(id);
  const [employeeName, setEmployeeName] = useState(name);
  const [employeeIsArcive, setEmployeeIsArcive] = useState(isArchive);
  const [employeeRole, setEmployeeRole] = useState(role);
  const [employeeBirthday, setEmployeeBirthday] = useState(
    convertTheFormatToYYYYMMDD(birthday)
  );
  const [employeePhone, setEmployeePhone] = useState(phone);

  const employeePhoneLength = 12;
  const ms = 1000;
  if (employeePhone.length === employeePhoneLength) {
    setTimeout(() => {
      setEmployeePhone(convertThePhone(employeePhone));
    }, ms);
  }
  const submit = (
    values: any,
    { setSubmitting }: { setSubmitting: (setSubmitting: boolean) => void }
  ): void => {
    const objectWithInformationAboutANewEmployee = {
      id: employeeId,
      name: employeeName,
      isArchive: employeeIsArcive,
      role: employeeRole,
      birthday: convertTheFormatToDDMMYYYY(birthday),
      phone: employeePhone,
    };
    dispatch(
      addChangesToEmployeeInformationAC(
        objectWithInformationAboutANewEmployee,
        id
      )
    );
    setSubmitting(false);
    navigate("/");
  };
  const changeId = (event: any): void => {
    setEmployeeId(event.currentTarget.value);
  };
  const changeName = (event: any): void => {
    setEmployeeName(event.currentTarget.value);
  };
  const changeIsArcive = (event: any): void => {
    setEmployeeIsArcive(event.currentTarget.value);
  };
  const changeRole = (event: any): void => {
    setEmployeeRole(event.currentTarget.value);
  };
  const changeBirthday = (event: any): void => {
    setEmployeeBirthday(event.currentTarget.value);
  };
  const changePhone = (event: any): void => {
    setEmployeePhone(event);
  };

  const deleteEmployee = (idEmployee: number): void => {
    dispatch(deleteEmployeeInformationAC(idEmployee));
    navigate("/");
  };
  return (
    <Formik
      initialValues={{ term: "" }}
      onSubmit={submit}
      className={style.wrapper}
    >
      {({ isSubmitting }) => (
        <Form className={style.container}>
          <Field
            type="tel"
            name="id"
            className={style.item}
            value={employeeId}
            placeholder="Id"
            onChange={changeId}
          />
          <Field
            type="text"
            name="name"
            value={employeeName}
            className={style.item}
            placeholder="Name"
            onChange={changeName}
          />
          <Field
            type="text"
            name="isArcive"
            className={style.item}
            placeholder="isArchive'"
            value={employeeIsArcive}
            onChange={changeIsArcive}
          />
          <Field
            type="text"
            name="role"
            className={style.item}
            placeholder="Role"
            value={employeeRole}
            onChange={changeRole}
          />
          <Field
            type="date"
            name="birthday"
            className={style.item}
            defaultValue={employeeBirthday}
            placeholder="Birthday"
            onChange={changeBirthday}
          />
          <PhoneInput
            country="RU"
            value={employeePhone}
            onChange={changePhone}
            className={style.item}
            placeholder="Phone"
          />
          <button type="submit" disabled={isSubmitting} className={style.item}>
            CHANGE
          </button>
          <button
            type="button"
            className={style.item}
            onClick={() => deleteEmployee(id)}
          >
            DELETE
          </button>
        </Form>
      )}
    </Formik>
  );
};
