import { Reducer } from "redux";

const COUNTER_STEP = 1;

enum ActionTypes {
  SET_COUNTER = "SET_COUNTER",
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER",
  RESET_COUNTER = "RESET_COUNTER",
  SETUP_MIN_VALUE = "SETUP_MIN_VALUE",
  SETUP_MAX_VALUE = "SETUP_MAX_VALUE",
  SET_COUNTER_STATUS = "SET_COUNTER_STATUS",
  SET_ERROR_STATUS = "SET_ERROR_STATUS",
}

type setCounterAction = {
  type: ActionTypes.SET_COUNTER;
  val: number;
};

type incrementCounterAction = {
  type: ActionTypes.INCREMENT_COUNTER;
};
type decrementCounterAction = {
  type: ActionTypes.DECREMENT_COUNTER;
};
type resetCounterAction = {
  type: ActionTypes.RESET_COUNTER;
};
type setMinValueAction = {
  type: ActionTypes.SETUP_MIN_VALUE;
  val: number;
};
type setMaxValueAction = {
  type: ActionTypes.SETUP_MAX_VALUE;
  val: number;
};
type setCounterStatusAction = {
  type: ActionTypes.SET_COUNTER_STATUS;
  status: CounterStatusType;
};
type setErrorStatusAction = {
  type: ActionTypes.SET_ERROR_STATUS;
  status: ErrorStatusType;
};

export type RootAction =
  | setCounterAction
  | incrementCounterAction
  | decrementCounterAction
  | resetCounterAction
  | setMinValueAction
  | setMaxValueAction
  | setCounterStatusAction
  | setErrorStatusAction;

export enum CounterStatusType {
  setup = "setup",
  count = "count",
}

export enum ErrorStatusType {
  noError = "noError",
  errorMin = "errorMin",
  errorMax = "errorMax",
}
export enum CountingStatusType {
  count = "count",
  start = "start",
  end = "end",
}

export enum LocalStorageItems {
  counterStatus = "counterStatus",
  errorStatus = "errorStatus",
  counter = "counter",
  minValue = "minValue",
  maxValue = "maxValue",
  countingStatus = "countingStatus",
}

export type StateType = {
  counter: number;
  maxValue: number;
  minValue: number;
  counterStatus: CounterStatusType;
  countingStatus: CountingStatusType;
  errorStatus: ErrorStatusType;
};
export const INIT_MIN_VALUE = 0;
export const INIT_MAX_VALUE = 5;

const initState: StateType = {
  counter: INIT_MIN_VALUE,
  maxValue: INIT_MAX_VALUE,
  minValue: INIT_MIN_VALUE,
  counterStatus: CounterStatusType.count,
  countingStatus: CountingStatusType.start,
  errorStatus: ErrorStatusType.noError,
};

const counterReducer: Reducer<StateType, RootAction> = (
  state = initState,
  action,
) => {
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
    case ActionTypes.DECREMENT_COUNTER:
      if (state.counter > state.minValue) {
        state.counter = state.counter - COUNTER_STEP;
        state.countingStatus = CountingStatusType.count;
      }
      if (state.minValue === state.counter)
        state.countingStatus = CountingStatusType.start;
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
      return state;
  }
};

export const setCounter = (value: number): setCounterAction => {
  return {
    type: ActionTypes.SET_COUNTER,
    val: value,
  };
};
export const incrementCounter = (): incrementCounterAction => {
  return {
    type: ActionTypes.INCREMENT_COUNTER,
  };
};
export const decrementCounter = (): decrementCounterAction => {
  return {
    type: ActionTypes.DECREMENT_COUNTER,
  };
};
export const resetCounter = (): resetCounterAction => {
  return {
    type: ActionTypes.RESET_COUNTER,
  };
};
export const setMinValue = (val: number): setMinValueAction => {
  return {
    type: ActionTypes.SETUP_MIN_VALUE,
    val,
  };
};
export const setMaxValue = (val: number): setMaxValueAction => {
  return {
    type: ActionTypes.SETUP_MAX_VALUE,
    val,
  };
};
export const setCounterStatus = (
  status: CounterStatusType,
): setCounterStatusAction => {
  return {
    type: ActionTypes.SET_COUNTER_STATUS,
    status,
  };
};
export const setErrorStatus = (
  status: ErrorStatusType,
): setErrorStatusAction => {
  return {
    type: ActionTypes.SET_ERROR_STATUS,
    status,
  };
};

export default counterReducer;
