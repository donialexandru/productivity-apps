import { useCurrentUser } from "../hooks/useAuth";

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

export default DashboardPage;
