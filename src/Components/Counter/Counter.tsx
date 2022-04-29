import s from '../../App.module.css'
import SuperButton from "../SuperButton/SuperButton";
import React, {useEffect} from "react";

type CounterPropsType = {
    clickHandler: () => void
    count: number
    resetHandler: () => void
    clickTimeOut: boolean
    error:string
}
export const Counter: React.FC<CounterPropsType> = (
    {clickHandler, count, resetHandler, clickTimeOut,error}) => {

    useEffect(()=>{
        if (error){
            resetHandler()
        }
    },[error])

    return (


        <div className={s.counter}>

            <div className={!clickTimeOut ? s.scoreboard : s.clickTimeOut}>
                {error?error:count}
            </div>

            <SuperButton disabled={clickTimeOut||!!error}
                         onClick={clickHandler}
                         className={s.clicker}
            >click</SuperButton>

            <SuperButton className={s.reset}
                         onClick={resetHandler}
                         red={clickTimeOut}
            >reset</SuperButton>


        </div>)

}