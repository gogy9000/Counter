import SuperButton from "./SuperButton";
import styles from './App.module.css'
import React, {ChangeEvent, useEffect, useState} from "react";
import {CustomInput} from "./CustomInput";
import {json} from "stream/consumers";

type CounterSettingsWrapperPropsType = {
    setStartValue: (x: number) => void
    setMaxValue: (x: number) => void
    startValue: number
    maxValue: number
}


export const CounterSettingsWrapper: React.FC<CounterSettingsWrapperPropsType> = (
    {
        setMaxValue, setStartValue,
        startValue, maxValue
    }
) => {
    const clear = () => localStorage.clear()

    useEffect(()=>{localStorage.setItem('maxValue', JSON.stringify(maxValue))},[maxValue])

    useEffect(()=>{localStorage.setItem('startValue', JSON.stringify(startValue) )},[startValue])

    const setMax = (value: string) => {
        if ((/^[0-9]*$/g).test(value)) {
            setMaxValue(Number(value))
        }

    }
    const setStart = (value: string) => {
        if ((/^[0-9]*$/g).test(value)) {
            setStartValue(Number(value))
        }
    }

    return (
        <div className={styles.settings}>

            <div className={styles.startValue}>start</div>

            <div className={styles.maxValue}>Max</div>

            <CustomInput value={startValue} onChangeText={setStart} className={styles.startValueInput}/>

            <CustomInput value={maxValue}  onChangeText={setMax} className={styles.maxValueInput}/>

        </div>
    )
}

