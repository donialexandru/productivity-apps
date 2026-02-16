import { useCounters } from "../features/counters/useCounters";
import Counter from "../features/counters/Counter";
import CreateCounter from "../features/counters/CreateCounter";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/counters")({
  component: Counters,
});

function Counters() {
  const { counters, countersNew, handleCreate, handleUpdate, handleDelete } =
    useCounters();

  return (
    <div className="counters-container">
      <h2>My Counters</h2>
      <CreateCounter onCreate={handleCreate} />
      <div className="counters">
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
