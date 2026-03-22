import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">Productivity apps</h1>
      </Link>
      <Link to="/counters">
        <h2 className="counters-nav">Counters</h2>
      </Link>
      <div className="nav-user">
        🔐
        <span className="nav-user-name">{"This will be the user's name"}</span>
      </div>
    </nav>
  );
}
