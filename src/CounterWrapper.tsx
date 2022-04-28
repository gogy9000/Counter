import {useState} from "react";
import {Counter} from "./Counter";
import styles from './App.module.css'

export const CounterWrapper = () => {
    let [count, setCount] = useState<number>(0)
    const [clickTimeOut, setClickTimeOut] = useState<boolean>(false)

    const clickHandler = () => {
        count !== 5 ?
            setCount(count = count + 1) :
            setClickTimeOut(true)
    }
    const resetHandler = () => {
        setCount(count = 0)
        setClickTimeOut(false)

    }

    return (
        <div className={styles.counter}>
            <Counter clickHandler={clickHandler}
                       count={count}
                       resetHandler={resetHandler}
                       clickTimeOut={clickTimeOut}/>
        </div>

    )
}
