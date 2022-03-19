import React from "react";
import s from "./CounterPanel.module.css";
import { CounterStatusType, ErrorStatusType } from "../Counter";

type CounterPanelPropsType = {
  maxValueReached: boolean;
  counter: number;
  counterState: CounterStatusType;
  errorStatus: ErrorStatusType;
};

export const CounterPanel: React.FC<CounterPanelPropsType> = (props) => {
  const { maxValueReached, counter, counterState, errorStatus } = props;

  const counterClass = s.counterViewNum + " " + (maxValueReached && s.red);
  const errorClass = s.counterView + " " + s.red;
  const setupClass = s.counterView;

  const showCounter = () => {
    if (counterState === CounterStatusType.count)
      return <div className={counterClass}>{counter}</div>;
  };

  const showErrorMessage = () => {
    if (
      errorStatus === ErrorStatusType.errorMin ||
      errorStatus === ErrorStatusType.errorMax
    )
      return <div className={errorClass}>Incorrect value</div>;
  };

  const showSetupMessage = () => {
    if (
      counterState === CounterStatusType.setup &&
      errorStatus === ErrorStatusType.noError
    )
      return <div className={setupClass}>Enter values and press 'set'</div>;
  };

  return (
    <div className={s.counterPanel}>
      {showCounter()}
      {showErrorMessage()}
      {showSetupMessage()}
    </div>
  );
};
