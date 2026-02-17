import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import type { TokenKey } from "../types/storage";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const TOKEN_KEY: TokenKey = "auth_token";

function isAuthenticated(): boolean {
  return !!localStorage.getItem(TOKEN_KEY);
}

export const Route = createFileRoute("/login")({
  component: LoginPage,
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({ to: "/dashboard" });
    }
  },
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoaging, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSumbit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      login(data.token);
      navigate({ to: "/dashboard" });
    } catch (error) {
      setError("Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSumbit}>
        <h1>Login</h1>
        {error && <div className="login-error">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoaging}>
          {isLoaging ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
