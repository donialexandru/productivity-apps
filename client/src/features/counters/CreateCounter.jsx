import { useState } from "react";
import styles from "./CreateCounter.module.css";

export default function CreateCounter({ onCreate }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onCreate(name.trim());
      setName("");
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
      <button type="submit" className={styles.addBtn}>
        + Add Counter
      </button>
    </form>
  );
}
