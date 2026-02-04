import { useState, useEffect } from "react";

export const useCounters = () => {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    fetchCounters();
    async function fetchCounters() {
      const response = await fetch("/api/counters");
      const data = await response.json();
      setCounters(data.counters);
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
  return { counters, handleCreate, handleUpdate, handleDelete };
};
