import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import type { TokenKey } from "../../types/storage";
import { useCurrentUser } from "../../hooks/useAuth";

export const Route = createFileRoute("/_protected/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name}</p>
    </div>
  );
}
