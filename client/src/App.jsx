import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counters from "./features/counters/Counters.jsx";
import Header from "./features/shared/layout/Header.jsx";
import "./index.css";

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
const root = createRoot(container);
root.render(<App />);
