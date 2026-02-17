import { Link } from "@tanstack/react-router";
import { useContext } from "react";

export default function Header() {
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">Productivity apps</h1>
      </Link>
      <div className="nav-user">
        🔐<span className="nav-user-name">{name}</span>
      </div>
    </nav>
  );
}
