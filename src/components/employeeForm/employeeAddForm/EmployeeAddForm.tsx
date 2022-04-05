import { FC, useState } from "react";

import { Field, Form, Formik } from "formik";
import moment from "moment";
import PhoneInput from "react-phone-number-input/input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import style from "components/employeeForm/employeeAddForm/EmployeeAddForm.module.scss";
import { addNewEmployeeAC } from "redux/actions";
import { namingTheOutputFormat } from "services/functions/namingTheOutputFormat";

export const EmployeeAddForm: FC = (): any => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [employeePhoneNumber, setEmployeePhoneNumber] = useState<any>();
  const addEmployeeBPhone = (event: any): void => {
    setEmployeePhoneNumber(event);
  };

  const submit = (
    values: any,
    { setSubmitting }: { setSubmitting: (setSubmitting: boolean) => void }
  ): void => {
    const objectWithInformationAboutANewEmployee = {
      ...values,
      birthday: moment(values.birthday).format("DD.MM.YYYY"),
      phone: namingTheOutputFormat(employeePhoneNumber),
    };
    dispatch(addNewEmployeeAC(objectWithInformationAboutANewEmployee));
    setSubmitting(false);
    navigate("/TestTask/");
  };
  return (
    <Formik
      initialValues={{ term: "" }}
      onSubmit={submit}
      className={style.wrapper}
    >
      {({ isSubmitting }) => (
        <Form className={style.container}>
          <Field type="tel" name="id" className={style.item} placeholder="Id" />
          <Field
            type="text"
            name="name"
            className={style.item}
            placeholder="Name"
          />
          <Field
            type="text"
            name="isArcive"
            className={style.item}
            placeholder="IsArcive"
          />
          <Field
            type="text"
            name="role"
            className={style.item}
            placeholder="Role"
          />
          <Field type="date" name="birthday" className={style.item} />
          <PhoneInput
            country="RU"
            defaultValue={employeePhoneNumber}
            onChange={addEmployeeBPhone}
            className={style.item}
            placeholder="Phone"
          />
          <button type="submit" disabled={isSubmitting} className={style.item}>
            ADD EMPLOYEE
          </button>
        </Form>
      )}
    </Formik>
  );
};
