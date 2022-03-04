import s from './Counter.module.css'
import React, {useEffect, useState} from "react";
import {CounterPanel} from "./CounterPanel";
import {CounterControls} from "./CounterControls";
import {CounterSettingsPanel} from "./CounterSettingsPanel";
import {CounterSettingsControl} from "./CounterSettingsControl";

export type CounterStateType = 'setup' | 'errorMin' | 'errorMax' | 'count'

export const Counter: React.FC = () => {

    useEffect(()=>{
        const counterStr = localStorage.getItem('counter')
        if(counterStr){
            setCounter(JSON.parse(counterStr))
        }
        const minVStr = localStorage.getItem('min')
        if(minVStr){
            setMinValue(JSON.parse(minVStr))
        }
        const maxVStr = localStorage.getItem('max')
        if(maxVStr){
            setMaxValue(JSON.parse(maxVStr))
        }
        const counterSStr = localStorage.getItem('counterState')
        if(counterSStr){
            setCounterState(JSON.parse(counterSStr))
        }
    },[])

    const MIN_VALUE = 0;
    const COUNTER_STEP = 1

    const [maxValue, setMaxValue] = useState<number>(MIN_VALUE)
    const [minValue, setMinValue] = useState<number>(MIN_VALUE)
    const [counter, setCounter] = useState<number>(minValue)
    const [counterState, setCounterState] = useState<CounterStateType>('errorMax')

    const incIsDisabled = (counter >= maxValue) || !(counterState === 'count')
    const resIsDisabled = (counter <= MIN_VALUE) || !(counterState === 'count')



    useEffect(()=>{
        localStorage.setItem('counter',JSON.stringify(counter))
    },[counter])
    useEffect(()=>{
        localStorage.setItem('counterState',JSON.stringify(counterState))
    },[counterState])
    useEffect(()=>{
        localStorage.setItem('min',JSON.stringify(minValue))
    },[minValue])
    useEffect(()=>{
        localStorage.setItem('max',JSON.stringify(maxValue))
    },[maxValue])



    const onClickIncHandler = () => {
        !incIsDisabled && setCounter(counter + COUNTER_STEP)
    }
    const onClickResHandler = () => {
        setCounter(minValue)
    }

    const setMinValueHandler = (val: number) => {
        if (val >= maxValue) {
            setCounterState('errorMax')
        } else if (val < MIN_VALUE) {
            setCounterState('errorMin')
        } else {
            setCounterState('setup')
        }
        setMinValue(val)

    }
    const setMaxValueHandler = (val: number) => {
        if(val<=minValue){
            setCounterState('errorMax')
        }else if(minValue<MIN_VALUE){
            setCounterState('errorMin')
        }else{
            setCounterState('setup')
        }
        setMaxValue(val)
    }

    const setSettingsHandler = () => {
        setCounter(minValue)
        setCounterState('count')
    }

    return <div className={s.counter}>
        <div className={s.counterMain}>
            <CounterSettingsPanel minValue={minValue}
                                  maxValue={maxValue}
                                  setMinValueHandler={setMinValueHandler}
                                  setMaxValueHandler={setMaxValueHandler}
                                  counterState={counterState}

            />
            <CounterSettingsControl setSettingsHandler={setSettingsHandler}
                                    setIsDisabled={!(counterState === 'setup')}/>
        </div>
        <div className={s.counterMain}>
            <CounterPanel maxValueReached={incIsDisabled}
                          counter={counter}
                          counterState={counterState}
            />
            <CounterControls incIsDisabled={incIsDisabled}
                             resIsDisabled={resIsDisabled}
                             onClickIncHandler={onClickIncHandler}
                             onClickResHandler={onClickResHandler}

            />
        </div>
    </div>
}

