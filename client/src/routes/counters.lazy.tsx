import { useCounters } from "../features/counters/useCounters";
import Counter from "../features/counters/Counter";
import CreateCounter from "../features/counters/CreateCounter";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getCounters from "../api/getCounters";

export const Route = createLazyFileRoute("/counters")({
  component: Counters,
});

function Counters() {
  const { counters, handleCreate, handleUpdate, handleDelete } = useCounters();

  const { isPending, status, fetchStatus, isError, error, data } = useQuery({
    queryKey: ["get-counters"],
    queryFn: getCounters,
    staleTime: 30000,
  });

  if (isPending) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div className="counters-container">
      <h2>My Counters</h2>
      <CreateCounter onCreate={handleCreate} />
      <div className="counters">
        {data.map((counter) => (
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
