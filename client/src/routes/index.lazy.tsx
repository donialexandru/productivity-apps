import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="index">
      <div className="index-brand">
        <h1>Productivity apps</h1>
        <p>The most useful apps that boost your productivity</p>
      </div>
      <ul>
        <li>
          <Link to="/counters">Counters</Link>
        </li>
      </ul>
    </div>
  );
}
