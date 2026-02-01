import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter(props) {
  const [value, setValue] = useState(1);

  return (
    <div className={styles.counterCard}>
      <h3 className={styles.title}>{props.name}</h3>
      <div className={styles.counter}>
        <button className={styles.btn}>−</button>
        <span className={styles.value}>{value}</span>
        <button className={styles.btn}>+</button>
      </div>
    </div>
  );
}
