import s from './Counter.module.css'
import React, {useState} from "react";
import {Button} from './Button';

type CounterPropsType = {
    maxVal: number
}

export const Counter:React.FC<CounterPropsType> = ({maxVal}) => {

    let [counter, setCounter] = useState<number>(0)

    const maxValue = counter >= maxVal
    const minValue = counter === 0

    const incClass = s.button + ' ' + (maxValue && s.disabled)
    const resetClass = s.button + ' ' + (minValue && s.disabled)

    const onClickIncHandler = () => {
        setCounter(++counter)
    }
    const onClickResHandler = () => {
        setCounter(0)
    }

    return <div className={s.counterWrapper}>
        <div className={s.counterShow + ' ' + (maxValue && s.red)}>{counter}</div>
        <div className={s.buttonsWrapper}>
            <Button name={'inc'} className={incClass} onClick={onClickIncHandler}
                    isDisabled={maxValue}/>
            <Button name={'reset'} className={resetClass} onClick={onClickResHandler}
                    isDisabled={minValue}/>
        </div>
    </div>
}