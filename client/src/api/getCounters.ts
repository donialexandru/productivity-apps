import { CounterSchemaArray } from "shared";

export default async function getCounters() {
  const response = await fetch("/api/counters");

  if (!response.ok) {
    throw new Error("Failed to fetch counters");
  }

  const data = await response.json();
  const counters = CounterSchemaArray.parse(data.counters);

  return counters;
}
