import React from "react";
import s from "./Counter.module.css";
import {CounterStateType} from "./Counter";

type CounterPanelPropsType = {
    maxValueReached: boolean
    counter: number
    counterState:CounterStateType
}

export const CounterPanel: React.FC<CounterPanelPropsType> = ({maxValueReached, counter,counterState}) => {
    const counterClass = s.counterViewNum  + ' ' + (maxValueReached && s.red)
    const errorClass = s.counterView  + ' ' + s.red
    const setupClass = s.counterView
    return <div className={s.counterPanel}>
        {counterState==='count' && <div className={counterClass}>{counter}</div>}
        {(counterState==='errorMin' || counterState==='errorMax') && <div className={errorClass}>Incorrect value</div>}
        {counterState==='setup' && <div className={setupClass}>Enter values and press 'set'</div>}
    </div>
}

