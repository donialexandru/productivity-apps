import { useState, useEffect } from "react";
import { CounterSchemaArray, type Counter } from "shared";

type Id = string;
type Value = number;

export const useCounters = () => {
  const [counters, setCounters] = useState<Counter[]>([]);

  useEffect(() => {
    async function fetchCounters() {
      const response = await fetch("/api/counters");
      const data = await response.json();
      console.log(data.counters);
      const counters = CounterSchemaArray.parse(data.counters);
      setCounters(counters);
    }

    fetchCounters();
  }, []);

  const handleCreate = async ({ name, targetCount }) => {
    const res = await fetch("/api/counters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, targetCount }),
    });

    const data = await res.json();
    setCounters([...counters, data.newCounter]);
  };

  const handleUpdate = async (id: Id, newValue: Value) => {
    await fetch(`/api/counters/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: newValue } : counter,
      ),
    );
  };

  const handleDelete = async (id: Id) => {
    await fetch(`/api/counters/${id}`, {
      method: "DELETE",
    });

    setCounters(counters.filter((counter) => counter.id !== id));
  };
  return { counters, handleCreate, handleUpdate, handleDelete };
};
