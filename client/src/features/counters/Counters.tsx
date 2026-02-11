import { useCounters } from "./useCounters";
import Counter from "./Counter";
import CreateCounter from "./CreateCounter";

export default function Counters() {
  const { counters, handleCreate, handleUpdate, handleDelete } = useCounters();

  return (
    <div className="counters-container">
      <h2>My Counters</h2>
      <CreateCounter className="create-counter" onCreate={handleCreate} />
      <div className="">
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
