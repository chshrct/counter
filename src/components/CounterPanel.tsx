import React from "react";
import s from "./Counter.module.css";
import {CounterStateType} from "./Counter";

type CounterPanelPropsType = {
    maxValueReached: boolean
    counter: number
    counterState: CounterStateType
}

export const CounterPanel: React.FC<CounterPanelPropsType> = ({maxValueReached, counter, counterState}) => {

    const counterClass = s.counterViewNum + ' ' + (maxValueReached && s.red)
    const errorClass = s.counterView + ' ' + s.red
    const setupClass = s.counterView

    const showCounter = counterState === 'count' &&
        <div className={counterClass}>{counter}</div>
    const showErrorMessage = (counterState === 'errorMin' || counterState === 'errorMax') &&
        <div className={errorClass}>Incorrect value</div>
    const showSetupMessage = counterState === 'setup' &&
        <div className={setupClass}>Enter values and press 'set'</div>

    return <div className={s.counterPanel}>
        {showCounter}
        {showErrorMessage}
        {showSetupMessage}
    </div>
}

