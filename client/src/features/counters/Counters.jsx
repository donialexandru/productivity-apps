import { useCounters } from "./useCounters";
import Counter from "./Counter";
import CreateCounter from "./CreateCounter";
import styles from "./Counters.module.css";

export default function Counters() {
  const { counters, handleCreate, handleUpdate, handleDelete } = useCounters();

  return (
    <div className={styles.grid}>
      <h2>My Counters</h2>
      <CreateCounter onCreate={handleCreate} />
      <div className={styles.container}>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            name={counter.name}
            currentCount={counter.currentCount}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
