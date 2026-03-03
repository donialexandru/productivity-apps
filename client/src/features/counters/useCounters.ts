import { useState, useEffect } from "react";
import {
  CounterSchema,
  CounterSchemaArray,
  type Counter,
  type CreateCounterInput,
} from "shared";
import { apiClient } from "../../api/client";

type CounterId = Counter["id"];
type CounterValue = Counter["currentCount"];

export const useCounters = () => {
  const [counters, setCounters] = useState<Counter[]>([]);

  useEffect(() => {
    async function fetchCounters() {
      const response = await apiClient.get("/api/counters");
      const data = response.data;
      const counters = CounterSchemaArray.parse(data.counters);
      setCounters(counters);
    }

    fetchCounters();
  }, []);

  const handleCreate = async ({ name, targetCount }: CreateCounterInput) => {
    const response = await apiClient.post("/api/counters", {
      name,
      targetCount,
    });

    const data = await response.data;
    const newCounter = CounterSchema.parse(data.newCounter);
    setCounters([...counters, newCounter]);
  };

  const handleUpdate = async (id: CounterId, newValue: CounterValue) => {
    const response = await apiClient.post(`/api/counters/${id}`);

    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: newValue } : counter,
      ),
    );
  };

  const handleDelete = async (id: CounterId) => {
    const response = await apiClient.delete(`/api/counters/${id}`);

    setCounters(counters.filter((counter) => counter.id !== id));
  };
  return {
    counters,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
};
