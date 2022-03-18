import s from "./Counter.module.css";
import React, { useEffect, useReducer } from "react";
import { CounterPanel } from "./CounterPanel/CounterPanel";
import { CounterControls } from "./CounterCountrols/CounterControls";
import { CounterSettingsPanel } from "./CounterSettingsPanel/CounterSettingsPanel";
import {
  incrementCounterAC,
  reducer,
  resetCounterAC,
  setCounterAC,
  setCounterStatusAC,
  setMaxValueAC,
  setMinValueAC,
} from "../reducer";

export enum CounterStateType {
  setup = "setup",
  errorMin = "errorMin",
  errorMax = "errorMax",
  count = "count",
}

export enum LocalStorageItems {
  counterState = "counterState",
  counter = "counter",
  minValue = "minValue",
  maxValue = "maxValue",
}

export type StateType = {
  maxValue: number;
  minValue: number;
  counter: number;
  counterState: CounterStateType;
};

export const Counter: React.FC = () => {
  const MIN_VALUE = 0;
  const INIT_MAX_VALUE = 5;

  const initState: StateType = {
    maxValue: INIT_MAX_VALUE,
    minValue: MIN_VALUE,
    counter: MIN_VALUE,
    counterState: CounterStateType.count,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const incIsDisabled =
    state.counter >= state.maxValue ||
    !(state.counterState === CounterStateType.count);
  const resIsDisabled =
    state.counter <= MIN_VALUE ||
    !(state.counterState === CounterStateType.count);
  const setIsDisabled = !(state.counterState === CounterStateType.setup);

  useEffect(() => {
    const counterStr = localStorage.getItem(LocalStorageItems.counter);
    const minVStr = localStorage.getItem(LocalStorageItems.minValue);
    const maxVStr = localStorage.getItem(LocalStorageItems.maxValue);
    const counterStateStr = localStorage.getItem(LocalStorageItems.counterState);

    if (counterStr) {
      dispatch(setCounterAC(JSON.parse(counterStr)));
    }
    if (minVStr) {
      dispatch(setMinValueAC(JSON.parse(minVStr)));
    }
    if (maxVStr) {
      dispatch(setMaxValueAC(JSON.parse(maxVStr)));
    }
    if (counterStateStr) {
      dispatch(setCounterStatusAC(JSON.parse(counterStateStr)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LocalStorageItems.counter, JSON.stringify(state.counter));
  }, [state.counter]);

  useEffect(() => {
    localStorage.setItem(LocalStorageItems.counterState, JSON.stringify(state.counterState));
  }, [state.counterState]);

  useEffect(() => {
    localStorage.setItem(LocalStorageItems.minValue, JSON.stringify(state.minValue));
  }, [state.minValue]);

  useEffect(() => {
    localStorage.setItem(LocalStorageItems.maxValue, JSON.stringify(state.maxValue));
  }, [state.maxValue]);

  const incrementCounter = () => {
    !incIsDisabled && dispatch(incrementCounterAC());
  };
  const resetCounter = () => {
    dispatch(resetCounterAC());
  };

  const setupMinValue = (value: number) => {
    dispatch(setMinValueAC(value));
    if (value >= state.maxValue) {
      return dispatch(setCounterStatusAC(CounterStateType.errorMax));
    }
    if (value < MIN_VALUE) {
      return dispatch(setCounterStatusAC(CounterStateType.errorMin));
    }
    dispatch(setCounterStatusAC(CounterStateType.setup));
  };
  const setupMaxValue = (value: number) => {
    if (value <= state.minValue) {
      dispatch(setCounterStatusAC(CounterStateType.errorMax));
    } else if (state.minValue < MIN_VALUE) {
      dispatch(setCounterStatusAC(CounterStateType.errorMin));
    } else {
      dispatch(setCounterStatusAC(CounterStateType.setup));
    }
    dispatch(setMaxValueAC(value));
  };

  const setSettings = () => {
    dispatch(setCounterAC(state.minValue));
    dispatch(setCounterStatusAC(CounterStateType.count));
  };

  return (
    <div className={s.counter}>
      <div className={s.counterMain}>
        <CounterSettingsPanel
          minValue={state.minValue}
          maxValue={state.maxValue}
          setupMinValue={setupMinValue}
          setupMaxValue={setupMaxValue}
          counterState={state.counterState}
        />
        <CounterControls
          setSettings={setSettings}
          setIsDisabled={setIsDisabled}
        />
      </div>
      <div className={s.counterMain}>
        <CounterPanel
          maxValueReached={incIsDisabled}
          counter={state.counter}
          counterState={state.counterState}
        />
        <CounterControls
          incIsDisabled={incIsDisabled}
          resIsDisabled={resIsDisabled}
          incrementCounter={incrementCounter}
          resetCounter={resetCounter}
        />
      </div>
    </div>
  );
};
