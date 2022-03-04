import {Input} from "./Input";
import React, {ChangeEvent} from "react";
import s from './Counter.module.css'
import {CounterStateType} from "./Counter";

type CounterSettingsPanelInputPropsType = {
    title: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean
}

export const CounterSettingsPanelInput: React.FC<CounterSettingsPanelInputPropsType> = ({
                                                                                            title,
                                                                                            value,
                                                                                            onChange,
                                                                                            error
                                                                                        }) => {
    const errorClassName = error ? s.counterPanelInputError : ''

    return <div className={s.counterPanelItem}>
        <span>{title}</span>
        <Input className={s.counterPanelInput}
               errorClassName={errorClassName}
               value={value}
               type={'number'}
               onChange={onChange}/>
    </div>
}