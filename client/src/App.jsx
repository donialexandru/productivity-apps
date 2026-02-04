import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import "./index.css";
import Counters from "./features/counters/Counters.jsx";

const App = () => {
  return (
    <StrictMode>
      <>
        <Header name="Productivity apps" />
        <Counters />
      </>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
