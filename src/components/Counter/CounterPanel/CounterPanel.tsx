import React from "react";
import s from "./CounterPanel.module.css";
import {CounterStateType} from "../Counter";

type CounterPanelPropsType = {
    maxValueReached: boolean
    counter: number
    counterState: CounterStateType
}

export const CounterPanel: React.FC<CounterPanelPropsType> = (props) => {

    const {
        maxValueReached,
        counter,
        counterState
    } = props

    const counterClass = s.counterViewNum + ' ' + (maxValueReached && s.red)
    const errorClass = s.counterView + ' ' + s.red
    const setupClass = s.counterView

    const showCounter = () => {
        if (counterState === 'count') return <div className={counterClass}>{counter}</div>
    }

    const showErrorMessage = () => {
        if (counterState === 'errorMin' || counterState === 'errorMax') return <div className={errorClass}>Incorrect
            value</div>
    }

    const showSetupMessage = () => {
        if (counterState === 'setup') return <div className={setupClass}>Enter values and press 'set'</div>
    }

    return <div className={s.counterPanel}>
        {showCounter()}
        {showErrorMessage()}
        {showSetupMessage()}
    </div>
}

