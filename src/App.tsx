import {CounterWrapper} from "./Components/Counter/CounterWrapper";
import {CounterSettingsWrapper} from "./Components/CounterSettings/CounterSettingsWrapper";
import styles from './App.module.css'
import {useState} from "react";

export const App = () => {

    const [error, setError] = useState('')

    // useEffect(() => {
    //     if(startValue>maxValue){
    //         setError('не канает!')
    //         return
    //     }
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [maxValue])
    //
    // useEffect(() => {
    //     if(startValue>maxValue){
    //         setError('не канает!')
    //         return
    //     }
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    // }, [startValue])

    return (
        <div className={styles.appWrapper}>
            <div className={styles.app}>
                <CounterSettingsWrapper setError={setError}/>
                <CounterWrapper error={error}/>
            </div>
        </div>


    )
}

