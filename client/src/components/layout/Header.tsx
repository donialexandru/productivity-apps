import { Link } from "@tanstack/react-router";
import "./Header.css";
import MindFlowLogo from "./icons/Logo";
import LogoutButton from "./LogoutButton";

export default function Header() {
  return (
    <nav className="header-nav">
      <Link to="/">
        <MindFlowLogo />
      </Link>
      <Link to="/counters">
        <h2 className="counters-nav">Counters</h2>
      </Link>
      <div className="nav-user">
        🔐
        <span className="nav-user-name">{"This will be the user's name"}</span>
      </div>
      <LogoutButton />
    </nav>
  );
}
