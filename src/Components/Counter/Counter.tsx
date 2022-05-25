import s from '../../App.module.css'
import SuperButton from "../SuperButton/SuperButton";
import React, {useEffect} from "react";
import {initStateType} from "../../redux/CountReducer";

type CounterPropsType = {
    clickHandler: () => void
    resetHandler: () => void
    error:string
    state: initStateType
}
export const Counter: React.FC<CounterPropsType> = (
    {clickHandler, resetHandler,error,state}) => {

    useEffect(()=>{
        if (error){
            resetHandler()
        }
    },[error])

    return (


        <div className={s.counter}>

            <div className={!state.isMaxValue ? s.scoreboard : s.clickTimeOut}>
                {error?error:state.count}
            </div>

            <SuperButton disabled={state.isMaxValue||!!error}
                         onClick={clickHandler}
                         className={s.clicker}
            >click</SuperButton>

            <SuperButton className={s.reset}
                         onClick={resetHandler}
                         red={state.isMaxValue}
            >reset</SuperButton>


        </div>)

}