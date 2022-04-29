import React, {useEffect, useState} from "react";
import {Counter} from "./Counter";
import styles from '../../App.module.css'

type CounterWrapperPropsType = {
    setStartValue:(x:number)=>void
    setMaxValue:(x:number)=>void
    startValue:number
    maxValue:number
    error:string
    setError:(error:string)=>void
}

export const CounterWrapper: React.FC<CounterWrapperPropsType> = ({
        startValue, maxValue,error,setError
    }) => {

    let [count, setCount] = useState<number>(Number(localStorage.getItem('startValue')))
    let[timeOutValue, setTimeOutValue]=useState<number>(Number(localStorage.getItem('startValue')))
    const [clickTimeOut, setClickTimeOut] = useState<boolean>(false)

    useEffect(() => {
        let valueAsNumber=Number(localStorage.getItem('startValue'))
        if(!valueAsNumber){return}
        setCount(valueAsNumber)
        console.log(localStorage.getItem('startValue'))
    }, [startValue,maxValue,error])


    useEffect(() => {
        if(!Number(localStorage.getItem('maxValue'))){return}
        setTimeOutValue(Number(localStorage.getItem('maxValue')))
    }, [maxValue,startValue,error])


    const clickHandler = () => {
        count !== timeOutValue ?
            setCount(count = count + 1) :
            setClickTimeOut(true)
    }
    const resetHandler = () => {
        setCount(count = Number(localStorage.getItem('startValue')))
        setClickTimeOut(false)

    }



    return (
        <div >
            <Counter error={error}
                clickHandler={clickHandler}
                     count={count}
                     resetHandler={resetHandler}
                     clickTimeOut={clickTimeOut}/>
        </div>

    )
}
