import {Input} from "../../../shared/Input";
import React from "react";
import s from './CounterSettingsPanelInput.module.css'

type CounterSettingsPanelInputPropsType = {
    value: number
    onChange: (e: number) => void
    error: boolean
}

export const CounterSettingsPanelInput: React.FC<CounterSettingsPanelInputPropsType> = (props) => {

    const {
        value,
        onChange,
        error,
        children
    } = props

    const errorClassName = error ? s.counterPanelInputError : ''


    return <div className={s.counterPanelItem}>
        <span>{children}</span>
        <Input className={s.counterPanelInput}
               errorClassName={errorClassName}
               value={value}
               onChangeNumber={onChange}/>
    </div>
}