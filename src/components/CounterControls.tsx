import React from "react";
import s from "./Counter.module.css";
import {Button} from "./Button";

type ButtonsContainerPropsType = {
    incIsDisabled:boolean
    resIsDisabled:boolean
    onClickIncHandler:()=>void
    onClickResHandler:()=>void
}

export const CounterControls:React.FC<ButtonsContainerPropsType> = ({incIsDisabled,resIsDisabled,onClickIncHandler,onClickResHandler}) => {

    const incClass = s.button + ' ' + (incIsDisabled && s.disabled)
    const resetClass = s.button + ' ' + (resIsDisabled && s.disabled)

    return <div className={s.counterControls}>
        <Button name={'inc'} className={incClass} onClick={onClickIncHandler}
                isDisabled={incIsDisabled}/>
        <Button name={'reset'} className={resetClass} onClick={onClickResHandler}
                isDisabled={resIsDisabled}/>
    </div>
}