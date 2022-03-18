import { Reducer } from "react";
import { CounterStateType, StateType } from "./Counter/Counter";
const COUNTER_STEP = 1;

enum ActionTypes {
  SET_COUNTER = "SET_COUNTER",
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  RESET_COUNTER = "RESET_COUNTER",
  SETUP_MIN_VALUE = "SETUP_MIN_VALUE",
  SETUP_MAX_VALUE = "SETUP_MAX_VALUE",
  SET_COUNTER_STATUS = "SET_COUNTER_STATUS",
}

interface setCounterAction {
  type: ActionTypes.SET_COUNTER;
  val: number;
}
interface incrementCounterAction {
  type: ActionTypes.INCREMENT_COUNTER;
}
interface resetCounterAction {
  type: ActionTypes.RESET_COUNTER;
}
interface setMinValueAction {
  type: ActionTypes.SETUP_MIN_VALUE;
  val: number;
}
interface setMaxValueAction {
  type: ActionTypes.SETUP_MAX_VALUE;
  val: number;
}
interface setCounterStatusAction {
  type: ActionTypes.SET_COUNTER_STATUS;
  status: CounterStateType;
}

type Action =
  | setCounterAction
  | incrementCounterAction
  | resetCounterAction
  | setMinValueAction
  | setMaxValueAction
  | setCounterStatusAction;

export const reducer:Reducer<StateType,Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_COUNTER:
      return { ...state, counter: action.val };
    case ActionTypes.INCREMENT_COUNTER:
      return { ...state, counter: state.counter + COUNTER_STEP };
    case ActionTypes.RESET_COUNTER:
      return { ...state, counter: state.minValue };
    case ActionTypes.SETUP_MIN_VALUE:
      return { ...state, minValue: action.val };
    case ActionTypes.SETUP_MAX_VALUE:
      return { ...state, maxValue: action.val };
    case ActionTypes.SET_COUNTER_STATUS:
      return { ...state, counterState: action.status };

    default:
      return state;
  }
};

export const setCounterAC = (value: number):setCounterAction => {
  return {
    type: ActionTypes.SET_COUNTER,
    val: value,
  };
};
export const incrementCounterAC = ():incrementCounterAction => {
  return {
    type: ActionTypes.INCREMENT_COUNTER,
  };
};
export const resetCounterAC = ():resetCounterAction => {
  return {
    type: ActionTypes.RESET_COUNTER,
  };
};
export const setMinValueAC = (val: number):setMinValueAction => {
  return {
    type: ActionTypes.SETUP_MIN_VALUE,
    val,
  };
};
export const setMaxValueAC = (val: number):setMaxValueAction => {
  return {
    type: ActionTypes.SETUP_MAX_VALUE,
    val,
  };
};
export const setCounterStatusAC = (status: CounterStateType):setCounterStatusAction => {
  return {
    type: ActionTypes.SET_COUNTER_STATUS,
    status,
  };
};
