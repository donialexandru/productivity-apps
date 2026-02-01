import styles from "./Counter.module.css";

export default function Counter(props) {
  return (
    <div className={styles.counterCard}>
      <h3 className={styles.title}>{props.name}</h3>
      <div className={styles.counter}>
        <button className={styles.btn}>−</button>
        <span className={styles.value}>0</span>
        <button className={styles.btn}>+</button>
      </div>
    </div>
  );
}
