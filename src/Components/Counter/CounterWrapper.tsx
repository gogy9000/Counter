import React from "react";
import {Counter} from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/Store";
import {actions} from "../../redux/CountReducer";

type CounterWrapperPropsType = {
    error: string
}

export const CounterWrapper: React.FC<CounterWrapperPropsType> = ({
                                                                      error
                                                                  }) => {

    // let [count, setCount] = useState<number>(Number(localStorage.getItem('startValue')))
    // let[timeOutValue, setTimeOutValue]=useState<number>(Number(localStorage.getItem('startValue')))
    // const [clickTimeOut, setClickTimeOut] = useState<boolean>(false)

    // useEffect(() => {
    //     let valueAsNumber=Number(localStorage.getItem('startValue'))
    //     if(!valueAsNumber){return}
    //     setCount(valueAsNumber)
    //     console.log(localStorage.getItem('startValue'))
    // }, [startValue,maxValue,error])
    //
    //
    // useEffect(() => {
    //     if(!Number(localStorage.getItem('maxValue'))){return}
    //     setTimeOutValue(Number(localStorage.getItem('maxValue')))
    // }, [maxValue,startValue,error])
    const state = useSelector((state: AppStateType) => state.CountReducer)
    const dispatch = useDispatch()
    const clickHandler = () => {
        state.count !== state.maxValue ?
            dispatch(actions.changeCounterValue(state.count + 1))
            :
            dispatch(actions.toggleIsMaxValue(true))
    }
    const resetHandler = () => {
        dispatch(actions.changeCounterValue(0))
        dispatch(actions.toggleIsMaxValue(false))

    }

    return (
        <div>
            <Counter error={error}
                     clickHandler={clickHandler}
                     state={state}
                     resetHandler={resetHandler}

            />
        </div>

    )
}
