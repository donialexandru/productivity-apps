import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";

interface RouterContext {
  isAuthenticated: () => boolean;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    return (
      <>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Outlet />
        </ErrorBoundary>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});
