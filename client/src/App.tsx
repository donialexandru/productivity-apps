import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counters from "./features/counters/Counters.tsx";
import Header from "./features/shared/layout/Header.tsx";
import "./styles/index.css";

const App = () => {
  return (
    <StrictMode>
      <>
        <Header />
        <Counters />
      </>
    </StrictMode>
  );
};

const container = document.getElementById("root");
if (container !== null) {
  const root = createRoot(container);
  root.render(<App />);
}
