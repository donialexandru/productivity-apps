import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import Header from "../components/layout/Header";
import { useLogout } from "../auth/hooks/useAuth";

export const Route = createFileRoute("/_protected")({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated()) {
      throw redirect({
        to: "/login",
        search: { redirect: location.pathname },
      });
    }
  },
  component: () => (
    <>
      <Header />
      <Outlet />
    </>
  ),
});
