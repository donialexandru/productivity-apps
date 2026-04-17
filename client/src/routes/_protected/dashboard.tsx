import { createFileRoute } from "@tanstack/react-router";
import DashboardPage from "../../auth/components/DashboardPage";

export const Route = createFileRoute("/_protected/dashboard")({
  component: DashboardPage,
});
