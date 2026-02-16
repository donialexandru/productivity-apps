import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../features/shared/layout/Header";
import { UserContext } from "../contexts/UserContext";

export const Route = createRootRoute({
  component: () => {
    const userHook = useState("Default");
    return (
      <>
        <UserContext.Provider value={userHook}>
          <Header />
          <Outlet />
        </UserContext.Provider>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});
