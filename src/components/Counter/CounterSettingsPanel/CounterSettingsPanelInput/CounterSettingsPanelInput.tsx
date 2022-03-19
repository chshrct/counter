import { Input } from "../../../../shared/Input";
import React, { Dispatch } from "react";
import s from "./CounterSettingsPanelInput.module.css";
import { Action, setMaxValueAction, setMinValueAction } from "../../counterReducer";

type CounterSettingsPanelInputPropsType = {
  type: InputType;
  value: number;
  dispatch: Dispatch<Action>;
  error: boolean;
};

export enum InputType {
  max = "max",
  min = "min",
}

export const CounterSettingsPanelInput: React.FC<
  CounterSettingsPanelInputPropsType
> = (props) => {
  const { type, value, dispatch, error, children } = props;

  const errorClassName = error ? s.counterPanelInputError : "";

  const onChange = (value:number) => {
      if(type===InputType.max) dispatch(setMaxValueAction(value));
      if(type===InputType.min) dispatch(setMinValueAction(value));
  };

  return (
    <div className={s.counterPanelItem}>
      <span>{children}</span>
      <Input
        className={s.counterPanelInput}
        errorClassName={errorClassName}
        value={value}
        onChangeNumber={onChange}
      />
    </div>
  );
};
