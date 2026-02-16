import { useState, useEffect } from "react";
import getCounters from "../../api/getCounters";
import { useQuery } from "@tanstack/react-query";
import {
  CounterSchema,
  CounterSchemaArray,
  type Counter,
  type CreateCounterInput,
} from "shared";

type CounterId = Counter["id"];
type CounterValue = Counter["currentCount"];

export const useCounters = () => {
  const [counters, setCounters] = useState<Counter[]>([]);
  const [isLoading, countersNew] = useQuery({
    queryKey: ["get-counters"],
    queryFn: () => getCounters(),
    staleTime: 30000,
  });

  useEffect(() => {
    async function fetchCounters() {
      const response = await fetch("/api/counters");

      if (!response.ok) {
        throw new Error("Failed to fetch counters");
      }

      const data = await response.json();
      const counters = CounterSchemaArray.parse(data.counters);
      setCounters(counters);
    }

    fetchCounters();
  }, []);

  const handleCreate = async ({ name, targetCount }: CreateCounterInput) => {
    const response = await fetch("/api/counters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, targetCount }),
    });

    if (!response.ok) {
      throw new Error("Failed to create counter");
    }

    const data = await response.json();
    const newCounter = CounterSchema.parse(data.newCounter);
    setCounters([...counters, newCounter]);
  };

  const handleUpdate = async (id: CounterId, newValue: CounterValue) => {
    const response = await fetch(`/api/counters/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to uptdate counter");
    }

    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: newValue } : counter,
      ),
    );
  };

  const handleDelete = async (id: CounterId) => {
    const response = await fetch(`/api/counters/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete counter");
    }
    setCounters(counters.filter((counter) => counter.id !== id));
  };
  return { counters, countersNew, handleCreate, handleUpdate, handleDelete };
};
