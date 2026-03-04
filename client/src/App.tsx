import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { AuthProvider, useAuthContext } from "./contexts/AuthContext";
import { ErrorBoundary } from "react-error-boundary";
import "./style.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const InnerApp = () => {
  const { isAuthenticated } = useAuthContext();

  const router = createRouter({
    routeTree,
    context: {
      isAuthenticated: () => isAuthenticated,
    },
  });

  return <RouterProvider router={router} />;
};

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <AuthProvider>
            <InnerApp />
          </AuthProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
if (container !== null) {
  const root = createRoot(container);
  root.render(<App />);
}
