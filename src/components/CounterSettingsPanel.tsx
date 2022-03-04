import s from "./Counter.module.css";
import React, {ChangeEvent} from "react";
import {CounterSettingsPanelInput} from "./CounterSettingsPanelInput";
import {CounterStateType} from "./Counter";

type CounterSettingsPanelPropsType = {
    minValue: number
    maxValue: number
    setMinValueHandler: (val: number) => void
    setMaxValueHandler: (val: number) => void
    counterState:CounterStateType;
}

export const CounterSettingsPanel: React.FC<CounterSettingsPanelPropsType> = ({
                                                                                  minValue,
                                                                                  maxValue,
                                                                                  setMinValueHandler,
                                                                                  setMaxValueHandler,
                                                                                  counterState
                                                                              }) => {
    const onChangeMinInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValueHandler(Number(e.currentTarget.value))
    }
    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueHandler(Number(e.currentTarget.value))
    }

    return <div className={s.counterPanel}>
        <CounterSettingsPanelInput title={'Max Value:'}
                                   value={maxValue}
                                   onChange={onChangeMaxInputHandler}
                                   error={counterState==='errorMax'}/>
        <CounterSettingsPanelInput title={'Min Value:'}
                                   value={minValue}
                                   onChange={onChangeMinInputHandler}
                                   error={counterState==='errorMin' || counterState==='errorMax'}/>
    </div>
}

