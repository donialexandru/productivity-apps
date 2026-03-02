import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { LoginForm } from "../components/LoginForm";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated()) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: LoginPage,
});

function LoginPage() {
  return <LoginForm />;
}
