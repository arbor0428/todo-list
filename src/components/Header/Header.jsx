import React, { useState, useRef, useEffect  } from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css'
import { HiMoon, HiSun } from 'react-icons/hi';
import DatePicker, { registerLocale }  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import Player from '../Player/Player';

registerLocale('ko', ko);

export default function Header() {
    const playerNameRef = useRef();

    const {darkMode, toggleDarkMode} = useDarkMode();
    const [startDate, setStartDate] = useState(new Date());

    const [playerName, setPlayerName] = useState('');

    useEffect(() => {
        // 페이지 로드 시 로컬 스토리지에서 플레이어 이름 읽어오기
        const savedPlayerName = readPlayerNameFromLocalStorage();
        if (savedPlayerName) {
        setPlayerName(savedPlayerName);
        }
    }, []);

    // 로컬 스토리지에서 플레이어 이름 읽어오는 함수
    function readPlayerNameFromLocalStorage() {
        // 'playerName' 키를 사용하여 데이터를 읽어옵니다.
        const savedPlayerName = localStorage.getItem('playerName');
        return savedPlayerName;
    }

    // 로컬 스토리지에 플레이어 이름 저장하는 함수
    function savePlayerNameToLocalStorage(name) {
        // 'playerName' 키를 사용하여 데이터를 저장합니다.
        localStorage.setItem('playerName', name);
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.calendar}>
                    <p>Date :</p>
                    <DatePicker 
                        className={styles.datePicker}
                        selected={startDate}
                        dateFormat="yyyy.MM.dd"
                        onChange={(date) => setStartDate(date)} 
                        locale={ko}
                    />
                </div>
                <div className={styles.header__right}>
                    <Player 
                        playerNameRef={playerNameRef}
                        readPlayerNameFromLocalStorage={readPlayerNameFromLocalStorage}
                        savePlayerNameToLocalStorage={savePlayerNameToLocalStorage}
                        setPlayerName={setPlayerName}
                    />
                    <button className={styles.toggle} onClick ={toggleDarkMode}>
                        {!darkMode && <HiMoon />}
                        {darkMode && <HiSun />}
                    </button>
                </div>
            </header>
            <h2>Welcome {playerName ? playerName : 'unknown entity'}!</h2>
        </>
    );
}

