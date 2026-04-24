import { Link } from "@tanstack/react-router";
import "./Header.css";
import MindFlowLogo from "./icons/Logo";

export default function Header() {
  return (
    <nav className="header-nav">
      <Link to="/">
        <MindFlowLogo />
      </Link>
      <Link to="/counters">Counters</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
