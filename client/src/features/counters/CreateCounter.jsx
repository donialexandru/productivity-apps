import { useState } from "react";
import styles from "./CreateCounter.module.css";

export default function CreateCounter({ onCreate }) {
  const [name, setName] = useState("");
  const [targetCounter, setTargetCounter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName) {
      onCreate({ name: trimmedName, targetCounter: targetCounter });
      setName("");
      setTargetCounter(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Counter name..."
        className={styles.input}
      />

      <input
        type="number"
        value={targetCounter}
        onChange={(e) => setTargetCounter(e.target.value)}
        placeholder="Target counter"
        className={styles.input}
      />
      <button type="submit" className={styles.addBtn}>
        + Add Counter
      </button>
    </form>
  );
}
