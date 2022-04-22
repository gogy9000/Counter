import s from "./Counter.module.css";
import SuperButton from "./SuperButton";
import React from "react";

type CounterPropsType = {
    clickHandler: () => void
    count: number
    resetHandler: () => void
    clickTimeOut: boolean
}
export const Counter: React.FC<CounterPropsType> = (
    {clickHandler, count, resetHandler, clickTimeOut}) => {
    return (
        <div className={s.counter}>

            <div className={!clickTimeOut ? s.scoreboard : s.clickTimeOut}>
                {count}
            </div>

                <SuperButton disabled={clickTimeOut}
                             onClick={clickHandler}
                             className={s.clicker}
                >click</SuperButton>



            <SuperButton className={s.reset}
                         onClick={resetHandler}
                         red={clickTimeOut}>reset</SuperButton>


        </div>)

}