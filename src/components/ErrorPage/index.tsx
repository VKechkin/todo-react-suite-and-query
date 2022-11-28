import React from "react";

import { IPropsError } from "@interfaces";

import "./style.scss";

const ErrorPage: React.FC<IPropsError> = ({ errorMessage }) => {
  return (
    <div className="container error-wrapper">
      <div>Elements not found....</div>
      <div>Error message: {errorMessage}</div>
    </div>
  );
};

export default ErrorPage;
