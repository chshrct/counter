import React, { Dispatch } from "react";
import s from "./CounterControls.module.css";
import { Button } from "../../../shared/Button";
import {
  Action,
  incrementCounterAction,
  resetCounterAction,
  setCounterStatusAction,
} from "../counterReducer";
import { CounterStatusType } from "../Counter";

type CounterControlsPropsType = {
  incIsDisabled?: boolean;
  resIsDisabled?: boolean;
  setIsDisabled?: boolean;
  dispatch: Dispatch<Action>;
};

export const CounterControls: React.FC<CounterControlsPropsType> = (props) => {
  const { incIsDisabled, resIsDisabled, setIsDisabled, dispatch } = props;
  const incClass = s.button + " " + (incIsDisabled && s.disabled);
  const resetClass = s.button + " " + (resIsDisabled && s.disabled);
  const setClass = s.button + " " + (setIsDisabled && s.disabled);

  const setSettingsOnClick = () => {
    dispatch(setCounterStatusAction(CounterStatusType.count));
  };
  const incCounterOnClick = () => {
    dispatch(incrementCounterAction());
  };
  const resetCounterOnClick = () => {
    dispatch(resetCounterAction());
  };

  const showSetupControls = () => {
    if (typeof setIsDisabled === "boolean")
      return (
        <Button
          className={setClass}
          onClick={setSettingsOnClick}
          disabled={setIsDisabled}
        >
          set
        </Button>
      );
  };
  const showCountingControls = () => {
    if (typeof incIsDisabled === "boolean")
      return (
        <>
          <Button
            className={incClass}
            onClick={incCounterOnClick}
            disabled={incIsDisabled}
          >
            inc
          </Button>
          <Button
            className={resetClass}
            onClick={resetCounterOnClick}
            disabled={resIsDisabled}
          >
            reset
          </Button>
        </>
      );
  };

  return (
    <div className={s.counterControls}>
      {showSetupControls()}
      {showCountingControls()}
    </div>
  );
};
