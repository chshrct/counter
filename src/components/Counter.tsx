import s from './Counter.module.css'
import React, {useState} from "react";
import {Button} from './Button';

type CounterPropsType = {
    minVal: number
    maxVal: number
}

export const Counter: React.FC<CounterPropsType> = ({minVal, maxVal}) => {

    const MAX_VALUE = maxVal
    const MIN_VALUE = minVal
    const COUNTER_STEP = 1

    const [counter, setCounter] = useState<number>(MIN_VALUE)

    const maxValueReached = counter === MAX_VALUE
    const minValueReached = counter === MIN_VALUE

    const incClass = s.button + ' ' + (maxValueReached && s.disabled)
    const resetClass = s.button + ' ' + (minValueReached && s.disabled)

    const onClickIncHandler = () => {
        !maxValueReached && setCounter(counter + COUNTER_STEP)
    }
    const onClickResHandler = () => {
        setCounter(MIN_VALUE)
    }

    return <div className={s.counterWrapper}>
        <div className={s.counterShow + ' ' + (maxValueReached && s.red)}>{counter}</div>
        <div className={s.buttonsWrapper}>
            <Button name={'inc'} className={incClass} onClick={onClickIncHandler}
                    isDisabled={maxValueReached}/>
            <Button name={'reset'} className={resetClass} onClick={onClickResHandler}
                    isDisabled={minValueReached}/>
        </div>
    </div>
}