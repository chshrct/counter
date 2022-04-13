import s from "./Counter.module.css";
import { FC, useEffect } from "react";
import { CounterPanel } from "./CounterPanel/CounterPanel";
import { CounterControls } from "./CounterControls/CounterControls";
import { CounterSettingsPanel } from "./CounterSettingsPanel/CounterSettingsPanel";
import {
  CounterStatusType,
  CountingStatusType,
  ErrorStatusType,
  LocalStorageItems,
  setCounterAction,
  setCounterStatusAction,
  setErrorStatusAction,
  setMaxValueAction,
  setMinValueAction,
} from "../../store/counter-reducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const Counter: FC = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const incIsDisabled =
    state.counterStatus === CounterStatusType.setup ||
    state.countingStatus === CountingStatusType.end;
  const resIsDisabled =
    state.counterStatus === CounterStatusType.setup ||
    state.countingStatus === CountingStatusType.start;

  const setIsDisabled =
    state.counterStatus === CounterStatusType.count ||
    state.errorStatus !== ErrorStatusType.noError;
    

  useEffect(() => {
    const counterStr = localStorage.getItem(LocalStorageItems.counter);
    const minVStr = localStorage.getItem(LocalStorageItems.minValue);
    const maxVStr = localStorage.getItem(LocalStorageItems.maxValue);
    const counterStatusStr = localStorage.getItem(
      LocalStorageItems.counterStatus,
    );
    const countingStatusStr = localStorage.getItem(
      LocalStorageItems.countingStatus,
    );
    const errorStatusStr = localStorage.getItem(LocalStorageItems.errorStatus);

    if (counterStr) {
      dispatch(setCounterAction(JSON.parse(counterStr)));
    }
    if (minVStr) {
      dispatch(setMinValueAction(JSON.parse(minVStr)));
    }
    if (maxVStr) {
      dispatch(setMaxValueAction(JSON.parse(maxVStr)));
    }
    if (counterStatusStr) {
      dispatch(setCounterStatusAction(JSON.parse(counterStatusStr)));
    }
    if (errorStatusStr) {
      dispatch(setErrorStatusAction(JSON.parse(errorStatusStr)));
    }
    if (countingStatusStr) {
      dispatch(setErrorStatusAction(JSON.parse(countingStatusStr)));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(
      LocalStorageItems.counter,
      JSON.stringify(state.counter),
    );
  }, [state.counter]);

  useEffect(() => {
    localStorage.setItem(
      LocalStorageItems.counterStatus,
      JSON.stringify(state.counterStatus),
    );
  }, [state.counterStatus]);
  useEffect(() => {
    localStorage.setItem(
      LocalStorageItems.countingStatus,
      JSON.stringify(state.countingStatus),
    );
  }, [state.countingStatus]);

  useEffect(() => {
    localStorage.setItem(
      LocalStorageItems.errorStatus,
      JSON.stringify(state.errorStatus),
    );
  }, [state.errorStatus]);

  useEffect(() => {
    localStorage.setItem(
      LocalStorageItems.minValue,
      JSON.stringify(state.minValue),
    );
  }, [state.minValue]);

  useEffect(() => {
    localStorage.setItem(
      LocalStorageItems.maxValue,
      JSON.stringify(state.maxValue),
    );
  }, [state.maxValue]);

  return (
    <div className={s.counter}>
      <div className={s.counterMain}>
        <CounterSettingsPanel
          dispatch={dispatch}
          minValue={state.minValue}
          maxValue={state.maxValue}
          errorStatus={state.errorStatus}
        />
        <CounterControls dispatch={dispatch} setIsDisabled={setIsDisabled} />
      </div>
      <div className={s.counterMain}>
        <CounterPanel
          counter={state.counter}
          counterState={state.counterStatus}
          maxValueReached={incIsDisabled}
          errorStatus={state.errorStatus}
        />
        <CounterControls
          dispatch={dispatch}
          incIsDisabled={incIsDisabled}
          resIsDisabled={resIsDisabled}
        />
      </div>
    </div>
  );
};
