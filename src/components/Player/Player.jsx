import styles from './Player.module.css'

export default function Player({
  playerNameRef,
  readPlayerNameFromLocalStorage,
  savePlayerNameToLocalStorage,
  setPlayerName,
}) {
    function handleClick() {
      const name = playerNameRef.current.value;
      // 로컬 스토리지에 플레이어 이름 저장
      savePlayerNameToLocalStorage(name);
      setPlayerName(name);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

    return (
    <section className={styles.player}>
      <p className={styles.form}>
          <input className={styles.input} ref={playerNameRef} type="text" placeholder='Your Name' onKeyPress={handleKeyPress} />
          <button className={styles.button} onClick={handleClick}>Set Name</button>
      </p>
    </section>
    );
}
