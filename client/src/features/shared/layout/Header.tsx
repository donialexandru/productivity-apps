import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [user] = useContext(UserContext);
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">Productivity apps</h1>
      </Link>
      <div className="nav-user">
        🔐<span className="nav-user-name">{user}</span>
      </div>
    </nav>
  );
}
