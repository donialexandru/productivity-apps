import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter({
  id,
  name,
  currentCount,
  onUpdate,
  onDelete,
}) {
  const [value, setValue] = useState(currentCount);

  const increment = () => {
    const newValue = value + 1;
    setValue(newValue);
    onUpdate(id, newValue);
  };
  const decrement = () => {
    const newValue = value - 1;
    setValue(newValue);
    onUpdate(id, newValue);
  };

  return (
    <div className={styles.counterCard}>
      <button className={styles.delteBtn} onClick={() => onDelete(id)}>
        x
      </button>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.counter}>
        <button className={styles.btn} onClick={decrement}>
          −
        </button>
        <span className={styles.value}>{value}</span>
        <button className={styles.btn} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
