import { useState, useEffect } from 'react'
import styles from './Timer.module.css'

export default function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10)
            }, 10);
        } else if(!isRunning){
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [isRunning]);

    return (
        <div className={styles.stopwatch}>
            <div className={styles.numbers}>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div className={styles.buttons}>
                <button onClick={() => setIsRunning(true)}>Start</button>
                <button onClick={() => setIsRunning(false)}>Stop</button>
                <button onClick={() => setTime(0)}>Reset</button>       
            </div>
        </div>
    );
}

