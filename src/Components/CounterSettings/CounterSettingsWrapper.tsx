import styles from '../../App.module.css'
import React, {useEffect, useState} from "react";
import {CustomInput} from "../CustomInput/CustomInput";


type CounterSettingsWrapperPropsType = {
    setStartValue: (x: number) => void
    setMaxValue: (x: number) => void
    startValue: number
    maxValue: number
    error:string
    setError:(error:string)=>void
}


export const CounterSettingsWrapper: React.FC<CounterSettingsWrapperPropsType> = (
    {
        setMaxValue, setStartValue,
        startValue, maxValue,error,setError
    }
) => {

    useEffect(() => {
        if(startValue>maxValue){
            setError('не канает!')
            return
        }
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        if(startValue>maxValue){
            setError('не канает!')
            return
        }
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])


    const setMax = (value: string) => {
        if (!(/^[0-9]*$/g).test(value)) {
            setError('только числа!')
            return
        }
        setError('')
        setMaxValue(Number(value))
    }

    const setStart = (value: string) => {
        if (!(/^[0-9]*$/g).test(value)) {
            setError('только числа!')
            return
        }
        setError('')
        setStartValue(Number(value))
    }

    const clearValue = () => {
        setError('')
    }
    const clearStorage = () => {
      localStorage.clear()
    }

    return (
        <div className={styles.settings}>

            <div className={styles.startValue}>start</div>

            <div className={styles.maxValue}>Max</div>

            <CustomInput onDoubleClick={clearStorage} onClick={clearValue}  value={startValue} onChangeText={setStart} className={styles.startValueInput}/>

            <CustomInput onDoubleClick={clearStorage}  onClick={clearValue} value={maxValue} onChangeText={setMax} className={styles.maxValueInput}/>

        </div>
    )
}

