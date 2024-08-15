import React from "react";

import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="pages">
      <div
        style={{ textAlign: "center" }}
      >{`${error.status}:${error.statusText}`}</div>
      <div>{error.data}</div>
    </div>
  );
};

export default Error;
