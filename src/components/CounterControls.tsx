import React from "react";
import s from "./Counter.module.css";
import {Button} from "./Button";

type CounterControlsPropsType = {
    incIsDisabled?: boolean
    resIsDisabled?: boolean
    incrementCounter?: () => void
    resetCounter?: () => void
    setIsDisabled?: boolean
    setSettings?: () => void
}

export const CounterControls: React.FC<CounterControlsPropsType> = ({
                                                                        incIsDisabled,
                                                                        resIsDisabled,
                                                                        incrementCounter,
                                                                        resetCounter,
                                                                        setSettings,
                                                                        setIsDisabled
                                                                    }) => {

    const incClass = s.button + ' ' + (incIsDisabled && s.disabled)
    const resetClass = s.button + ' ' + (resIsDisabled && s.disabled)
    const setClass = s.button + ' ' + (setIsDisabled && s.disabled)


    return <div className={s.counterControls}>
        {incrementCounter && <>
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
            </Button></>}
        {setSettings &&
            <Button
                className={setClass}
                onClick={setSettings}
                disabled={setIsDisabled}>
                set
            </Button>}
    </div>
}