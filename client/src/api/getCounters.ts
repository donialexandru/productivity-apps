import { CounterSchemaBody } from "shared";

export default async function getCounters() {
  const response = await fetch("/api/counters");
  const data = CounterSchemaBody.parse(await response.json());

  const counters = data.counters;

  return counters;
}
