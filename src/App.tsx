import {CounterWrapper} from "./CounterWrapper";
import {CounterSettingsWrapper} from "./CounterSettingsWrapper";
import styles from './App.module.css'
import {useState} from "react";

export const App = () => {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)


    return (
        <div className={styles.app}>
            <CounterSettingsWrapper  maxValue={maxValue}  startValue={startValue}
                                    setStartValue={setStartValue} setMaxValue={setMaxValue} />
            <CounterWrapper maxValue={maxValue}  startValue={startValue}
                            setStartValue={setStartValue} setMaxValue={setMaxValue}/>
        </div>

    )
}

