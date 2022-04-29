import {CounterWrapper} from "./Components/Counter/CounterWrapper";
import {CounterSettingsWrapper} from "./Components/CounterSettings/CounterSettingsWrapper";
import styles from './App.module.css'
import {useState} from "react";

export const App = () => {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [error,setError]=useState('')

    return (
        <div className={styles.appWrapper}>
            <div className={styles.app}>
            <CounterSettingsWrapper error={error} setError={setError} maxValue={maxValue}  startValue={startValue}
                                    setStartValue={setStartValue} setMaxValue={setMaxValue} />
            <CounterWrapper error={error} setError={setError} maxValue={maxValue}  startValue={startValue}
                            setStartValue={setStartValue} setMaxValue={setMaxValue}/>
        </div>
        </div>


    )
}

