import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import type { TokenKey } from "../types/storage";
import { useAuth } from "../contexts/AuthContext";

const TOKEN_KEY: TokenKey = "auth_token";

function isAuthenticated(): boolean {
  return !!localStorage.getItem(TOKEN_KEY);
}

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({ to: "/login" });
    }
  },
});

function DashboardPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate({ to: "/login" });
  };
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome! You are logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
