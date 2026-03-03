import { Link } from "@tanstack/react-router";
import { useUserContext } from "../../../contexts/UserContext";

export default function Header() {
  const { name } = useUserContext();
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">Productivity apps</h1>
      </Link>
      <Link to="/counters">
        <h2 className="counters-nav">Counters</h2>
      </Link>
      <div className="nav-user">
        🔐<span className="nav-user-name">{name}</span>
      </div>
    </nav>
  );
}
