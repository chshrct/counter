import s from "./CounterSettingsPanel.module.css";
import React from "react";
import {
  CounterSettingsPanelInput,
  InputType,
} from "./CounterSettingsPanelInput/CounterSettingsPanelInput";
import { ErrorStatusType } from "../../../store/counter-reducer";

type CounterSettingsPanelPropsType = {
  minValue: number;
  maxValue: number;
  errorStatus: ErrorStatusType;
  dispatch: any;
};

export const CounterSettingsPanel: React.FC<CounterSettingsPanelPropsType> = (
  props,
) => {
  const { minValue, maxValue, errorStatus, dispatch } = props;

  const maxInputError = errorStatus === ErrorStatusType.errorMax;
  const minInputError =
    errorStatus === ErrorStatusType.errorMin ||
    errorStatus === ErrorStatusType.errorMax;

  return (
    <div className={s.counterPanel}>
      <CounterSettingsPanelInput
        type={InputType.max}
        value={maxValue}
        dispatch={dispatch}
        error={maxInputError}
      >
        Max Value:
      </CounterSettingsPanelInput>
      <CounterSettingsPanelInput
        type={InputType.min}
        value={minValue}
        dispatch={dispatch}
        error={minInputError}
      >
        Min Value:
      </CounterSettingsPanelInput>
    </div>
  );
};
