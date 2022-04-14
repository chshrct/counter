import React from "react";
import { ErrorStatusType } from "../../../store/counter-reducer";
import { useAppSelector } from "../../../store/hooks";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ProgressC from "./ProgressC/Progress";

const Status = () => {
  const errorStatus = useAppSelector((state) => state.errorStatus);

  return (
    <>
      {errorStatus === ErrorStatusType.noError ? (
        <ProgressC />
      ) : (
        <ErrorMessage />
      )}
    </>
  );
};

export default Status;
