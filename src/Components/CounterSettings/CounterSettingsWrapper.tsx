import styles from '../../App.module.css'
import React, {useEffect, useState} from "react";
import {CustomInput} from "../CustomInput/CustomInput";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/Store";
import {actions, initStateType} from "../../redux/CountReducer";


type CounterSettingsWrapperPropsType = {
    setError:(error:string)=>void
}


export const CounterSettingsWrapper: React.FC<CounterSettingsWrapperPropsType> = ({setError}
) => {

    const state=useSelector<AppStateType,initStateType>((state)=>state.CountReducer)
    const dispatch=useDispatch()

    const setMax = (value: string) => {
        if (!(/^[0-9]*$/g).test(value)) {
            setError('только числа!')
            return
        }
        setError('')
        dispatch(actions.setMaxValue(Number(value)))
    }

    const setStart = (value: string) => {
        if (!(/^[0-9]*$/g).test(value)) {
            setError('только числа!')
            return
        }
        setError('')
        dispatch(actions.setStartValue(Number(value)))
        dispatch(actions.changeCounterValue(Number(value)))
        dispatch(actions.setMaxValue(Number(value)))
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

            <CustomInput onDoubleClick={clearStorage} onClick={clearValue}  value={state.startValue} onChangeText={setStart} className={styles.startValueInput}/>

            <CustomInput onDoubleClick={clearStorage}  onClick={clearValue} value={state.maxValue} onChangeText={setMax} className={styles.maxValueInput}/>

        </div>
    )
}

