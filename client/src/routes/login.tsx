import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { LoginForm } from "../components/LoginForm";
import { useState } from "react";
import { RegisterForm } from "../components/RegisterForm";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated()) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: AuthPage,
});

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>{isLogin ? "Welcome back" : "Create account"}</h1>
        <p>{isLogin ? "Sign in to your account" : "Get started for free"}</p>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <p className="switch-text">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <a onClick={() => setIsLogin(false)}>Create one</a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a onClick={() => setIsLogin(true)}>Sign in</a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
