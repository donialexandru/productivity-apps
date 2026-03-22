import { createFileRoute } from "@tanstack/react-router";
import { useCurrentUser } from "../../auth/hooks/useAuth";
import Counters from "../../features/counters/components/Counters";

export const Route = createFileRoute("/_protected/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Welcome, {user?.email}</p>
      </div>
    </>
  );
}
