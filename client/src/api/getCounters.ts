import { CounterSchemaBody } from "shared";
import { apiClient } from "./client";

export default async function getCounters() {
  const response = await apiClient.get("/api/counters");
  const data = CounterSchemaBody.parse(await response.json());

  const counters = data.counters;

  return counters;
}
