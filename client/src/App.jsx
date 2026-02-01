import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import "./index.css";
import Counter from "./features/counter/Counter.jsx";

const App = () => {
  return (
    <>
      <Header name="Productivity apps" />
      <Counter />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
