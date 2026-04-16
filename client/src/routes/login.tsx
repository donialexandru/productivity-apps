import { createFileRoute, redirect } from "@tanstack/react-router";
import AuthPage from "../auth/components/AuthPage";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated()) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: AuthPage,
});
