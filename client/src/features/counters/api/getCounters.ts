import { CounterSchemaBody } from "shared";
import { apiClient } from "../../../lib/axios.ts";

export default async function getCounters() {
  const response = await apiClient.get("/api/counters");
  const data = CounterSchemaBody.parse(await response.data);

  const counters = data.counters;

  return counters;
}
