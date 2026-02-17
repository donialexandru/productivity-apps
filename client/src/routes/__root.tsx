import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../features/shared/layout/Header";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Header />
        <Outlet />
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});
