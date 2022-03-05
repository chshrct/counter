import s from "./Counter.module.css";
import React from "react";
import {CounterSettingsPanelInput} from "./CounterSettingsPanelInput";
import {CounterStateType} from "./Counter";

type CounterSettingsPanelPropsType = {
    minValue: number
    maxValue: number
    setupMinValue: (val: number) => void
    setupMaxValue: (val: number) => void
    counterState: CounterStateType;
}

export const CounterSettingsPanel: React.FC<CounterSettingsPanelPropsType> = ({
                                                                                  minValue,
                                                                                  maxValue,
                                                                                  setupMinValue,
                                                                                  setupMaxValue,
                                                                                  counterState
                                                                              }) => {

    return <div className={s.counterPanel}>
        <CounterSettingsPanelInput title={'Max Value:'}
                                   value={maxValue}
                                   onChange={setupMaxValue}
                                   error={counterState === 'errorMax'}/>
        <CounterSettingsPanelInput title={'Min Value:'}
                                   value={minValue}
                                   onChange={setupMinValue}
                                   error={counterState === 'errorMin' || counterState === 'errorMax'}/>
    </div>
}

