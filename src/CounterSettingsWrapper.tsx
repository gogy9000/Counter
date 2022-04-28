import SuperButton from "./SuperButton";
import styles from './App.module.css'
import {ChangeEvent, useEffect, useState} from "react";
import {CustomInput} from "./CustomInput";
import {json} from "stream/consumers";

export const CounterSettingsWrapper = () => {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)


    const setValueHandler = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue) )
        localStorage.setItem('maxValue', JSON.stringify(maxValue) )

    }
    const clear = () => localStorage.clear()

    const getValue = () => {
      let  start = localStorage.getItem('startValue')
        console.log(start)
        if(!start){return}
        setStartValue(Number(start))
    }

    const setMax = (value:string) => {
        if ((/^\d+$/g).test(value)){
            setMaxValue(Number(value))
        }
    }
    const setMin = (value:string) => {

        if ((/^\d+$/g).test(value)){
            setStartValue(Number(value))
        }
    }

    return (
        <div className={styles.settings}>
            <div className={styles.startValue}>{localStorage.getItem('startValue')}</div>

            <div className={styles.maxValue}>{localStorage.getItem('maxValue')}</div>

            <CustomInput value={startValue} onChangeText={setMin} className={styles.startValueInput}/>

            <CustomInput value={maxValue} onChangeText={setMax} className={styles.maxValueInput}/>

            <SuperButton onClick={setValueHandler} className={styles.setButton}>set</SuperButton>

            <button onClick={clear}>X</button>
            <button onClick={getValue}>get</button>
        </div>
    )
}

