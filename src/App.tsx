import { FC, useEffect } from "react";

import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { EmployeeAddForm, EmployeeManagement } from "components";
import { EmployeeModificationAndDeletionForm } from "components/employeeForm";
import { getEmployessTC } from "redux/thunk/employees";

export const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployessTC());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<EmployeeManagement />} />
      <Route path="/add" element={<EmployeeAddForm />} />
      <Route
        path="/change/:id"
        element={<EmployeeModificationAndDeletionForm />}
      />
    </Routes>
  );
};
