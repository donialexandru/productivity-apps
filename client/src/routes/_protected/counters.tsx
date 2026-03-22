import { createFileRoute } from "@tanstack/react-router";
import Counters from "../../features/counters/components/Counters";

export const Route = createFileRoute("/_protected/counters")({
  component: Counters,
});
