import SuperButton from "./SuperButton";
import styles from './App.module.css'
export const CounterSettingsWrapper = () => {

    return (
        <div className={styles.settings}>
            <div className={styles.startValue}>value</div>
            <div className={styles.maxValue}>value</div>
            <input className={styles.startValueInput}/>
            <input className={styles.maxValueInput}/>
            <SuperButton className={styles.setButton}>set</SuperButton>

        </div>
    )
}

