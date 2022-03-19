import { Reducer } from "react";
import {
  CounterStatusType,
  CountingStatusType,
  ErrorStatusType,
  INIT_MIN_VALUE,
  StateType,
} from "./Counter";
const COUNTER_STEP = 1;

enum ActionTypes {
  SET_COUNTER = "SET_COUNTER",
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  RESET_COUNTER = "RESET_COUNTER",
  SETUP_MIN_VALUE = "SETUP_MIN_VALUE",
  SETUP_MAX_VALUE = "SETUP_MAX_VALUE",
  SET_COUNTER_STATUS = "SET_COUNTER_STATUS",
  SET_ERROR_STATUS = "SET_ERROR_STATUS",
}

interface setCounter {
  type: ActionTypes.SET_COUNTER;
  val: number;
}
interface incrementCounter {
  type: ActionTypes.INCREMENT_COUNTER;
}
interface resetCounter {
  type: ActionTypes.RESET_COUNTER;
}
interface setMinValue {
  type: ActionTypes.SETUP_MIN_VALUE;
  val: number;
}
interface setMaxValue {
  type: ActionTypes.SETUP_MAX_VALUE;
  val: number;
}
interface setCounterStatus {
  type: ActionTypes.SET_COUNTER_STATUS;
  status: CounterStatusType;
}
interface setErrorStatus {
  type: ActionTypes.SET_ERROR_STATUS;
  status: ErrorStatusType;
}

export type Action =
  | setCounter
  | incrementCounter
  | resetCounter
  | setMinValue
  | setMaxValue
  | setCounterStatus
  | setErrorStatus;

export const reducer: Reducer<StateType, Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_COUNTER:
      state.countingStatus = CountingStatusType.start;
      return { ...state, counter: action.val };
    case ActionTypes.INCREMENT_COUNTER:
      if (state.counter < state.maxValue) {
        state.counter = state.counter + COUNTER_STEP;
        state.countingStatus = CountingStatusType.count;
      }
      if (state.maxValue === state.counter)
        state.countingStatus = CountingStatusType.end;
      return { ...state };
    case ActionTypes.RESET_COUNTER:
      state.countingStatus = CountingStatusType.start;
      return { ...state, counter: state.minValue };
    case ActionTypes.SETUP_MIN_VALUE:
      state.counterStatus = CounterStatusType.setup;
      if (action.val >= state.maxValue) {
        state.errorStatus = ErrorStatusType.errorMax;
      } else if (action.val < INIT_MIN_VALUE) {
        state.errorStatus = ErrorStatusType.errorMin;
      } else {
        state.errorStatus = ErrorStatusType.noError;
      }
      return { ...state, minValue: action.val };
    case ActionTypes.SETUP_MAX_VALUE:
      state.counterStatus = CounterStatusType.setup;
      if (action.val <= state.minValue) {
        state.errorStatus = ErrorStatusType.errorMax;
      } else if (state.minValue < INIT_MIN_VALUE) {
        state.errorStatus = ErrorStatusType.errorMin;
      } else {
        state.errorStatus = ErrorStatusType.noError;
      }

      return { ...state, maxValue: action.val };
    case ActionTypes.SET_COUNTER_STATUS:
      state.counter = state.minValue;
      return { ...state, counterStatus: action.status };

    case ActionTypes.SET_ERROR_STATUS:
      return { ...state, errorStatus: action.status };

    default:
      throw new Error("action not valid");
  }
};

export const setCounterAction = (value: number): setCounter => {
  return {
    type: ActionTypes.SET_COUNTER,
    val: value,
  };
};
export const incrementCounterAction = (): incrementCounter => {
  return {
    type: ActionTypes.INCREMENT_COUNTER,
  };
};
export const resetCounterAction = (): resetCounter => {
  return {
    type: ActionTypes.RESET_COUNTER,
  };
};
export const setMinValueAction = (val: number): setMinValue => {
  return {
    type: ActionTypes.SETUP_MIN_VALUE,
    val,
  };
};
export const setMaxValueAction = (val: number): setMaxValue => {
  return {
    type: ActionTypes.SETUP_MAX_VALUE,
    val,
  };
};
export const setCounterStatusAction = (
  status: CounterStatusType,
): setCounterStatus => {
  return {
    type: ActionTypes.SET_COUNTER_STATUS,
    status,
  };
};
export const setErrorStatusAction = (
  status: ErrorStatusType,
): setErrorStatus => {
  return {
    type: ActionTypes.SET_ERROR_STATUS,
    status,
  };
};
