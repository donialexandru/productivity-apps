import { useState, useEffect } from "react";
import Counter from "./Counter";
import CreateCounter from "./CreateCounter";
import styles from "./Counters.module.css";

export default function Counters() {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    fetchCounters();
  }, []);

  const fetchCounters = async () => {
    const res = await fetch("/api/counters");
    const data = await res.json();
    setCounters(data.counters);
  };

  const handleCreate = async (name) => {
    const res = await fetch("/api/counters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, value: 0 }),
    });

    const newCounter = await res.json();
    setCounters([...counters, newCounter]);
  };

  const handleUpdate = async (id, newCounter) => {
    await fetch(`/api/counters/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: newCounter } : counter,
      ),
    );
  };

  const handleDelete = async (id) => {
    await fetch(`/api/counters/${id}`, {
      method: "DELETE",
    });

    setCounters(counters.filter((counter) => counter.id !== id));
  };

  return (
    <div className={styles.containe}>
      <h2>My Counters</h2>
      <CreateCounter onCreate={handleCreate} />
      <div className={styles.grid}>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            name={counter.name}
            currentValue={counter.value}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
