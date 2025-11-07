import { createRoot } from "react-dom/client";
import Header from "./Header";

const App = () => {
  return <Header name="Productivity apps" />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
