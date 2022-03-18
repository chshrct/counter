import s from "./CounterSettingsPanel.module.css";
import React from "react";
import {CounterSettingsPanelInput} from "./CounterSettingsPanelInput/CounterSettingsPanelInput";
import {CounterStateType} from "../Counter";

type CounterSettingsPanelPropsType = {
    minValue: number
    maxValue: number
    setupMinValue: (val: number) => void
    setupMaxValue: (val: number) => void
    counterState: CounterStateType;
}

export const CounterSettingsPanel: React.FC<CounterSettingsPanelPropsType> = (props) => {

    const {
        minValue,
        maxValue,
        setupMinValue,
        setupMaxValue,
        counterState
    } = props

    const maxInputError = counterState === 'errorMax'
    const minInputError = counterState === 'errorMin' || counterState === 'errorMax'

    return <div className={s.counterPanel}>
        <CounterSettingsPanelInput value={maxValue}
                                   onChange={setupMaxValue}
                                   error={maxInputError}>
            Max Value:
        </CounterSettingsPanelInput>
        <CounterSettingsPanelInput value={minValue}
                                   onChange={setupMinValue}
                                   error={minInputError}>
            Min Value:
        </CounterSettingsPanelInput>
    </div>
}

