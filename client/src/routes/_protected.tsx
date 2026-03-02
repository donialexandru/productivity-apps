import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import Header from "../features/shared/layout/Header";
import { useLogout } from "../hooks/useAuth";

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

function LogoutButton() {
  const logout = useLogout();
  return (
    <button onclick={() => logout.mutate()}>
      {logout.isPending ? "Logging out..." : "Logout"}
    </button>
  );
}
