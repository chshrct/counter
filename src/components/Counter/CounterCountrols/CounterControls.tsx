import React from "react";
import s from "./CounterControls.module.css";
import {Button} from "../../shared/Button";

type CounterControlsPropsType = {
    incIsDisabled?: boolean
    resIsDisabled?: boolean
    incrementCounter?: () => void
    resetCounter?: () => void
    setIsDisabled?: boolean
    setSettings?: () => void
}

export const CounterControls: React.FC<CounterControlsPropsType> = (props) => {

    const {
        incIsDisabled,
        resIsDisabled,
        incrementCounter,
        resetCounter,
        setSettings,
        setIsDisabled
    } = props

    const incClass = s.button + ' ' + (incIsDisabled && s.disabled)
    const resetClass = s.button + ' ' + (resIsDisabled && s.disabled)
    const setClass = s.button + ' ' + (setIsDisabled && s.disabled)

    const showSetupControls = () => {
        if (setSettings) return (<Button
            className={setClass}
            onClick={setSettings}
            disabled={setIsDisabled}>
            set
        </Button>)
    }
    const showCountingControls = () => {
        if (incrementCounter && resetCounter) return (<>
            <Button
                className={incClass}
                onClick={incrementCounter}
                disabled={incIsDisabled}>
                inc
            </Button>
            <Button
                className={resetClass}
                onClick={resetCounter}
                disabled={resIsDisabled}>
                reset
            </Button></>)
    }


    return <div className={s.counterControls}>
        {showSetupControls()}
        {showCountingControls()}
    </div>
}