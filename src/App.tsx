import {CounterWrapper} from "./CounterWrapper";
import {CounterSettingsWrapper} from "./CounterSettingsWrapper";
import styles from './App.module.css'

export const App = () => {



    return (
        <div className={styles.app}>
            <CounterSettingsWrapper/>
            <CounterWrapper/>
        </div>

    )
}

