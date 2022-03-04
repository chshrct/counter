import s from "./Counter.module.css";
import React from "react";
import {Button} from "./Button";

type CounterSettingsControlPropsType = {
    setSettingsHandler: () => void
    setIsDisabled:boolean
}

export const CounterSettingsControl: React.FC<CounterSettingsControlPropsType> = ({setSettingsHandler,setIsDisabled}) => {
    const onClickSetHandler = () => {
        setSettingsHandler()
    }
    const setClass = s.button + ' ' + (setIsDisabled && s.disabled)
    return <div className={s.counterControls}>
        <Button name={'set'} className={setClass} onClick={onClickSetHandler} isDisabled={setIsDisabled}/>
    </div>
}