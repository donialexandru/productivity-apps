import { createFileRoute } from "@tanstack/react-router";
import Counters from "../../features/counters/Counters";

export const Route = createFileRoute("/_protected/counters")({
  component: Counters,
});
