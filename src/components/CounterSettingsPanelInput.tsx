import {Input} from "./Input";
import React from "react";
import s from './Counter.module.css'

type CounterSettingsPanelInputPropsType = {
    title: string
    value: number
    onChange: (e: number) => void
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
               onChangeNumber={onChange}/>
    </div>
}