import { Link } from "@tanstack/react-router";
import "./Header.css";
import MindFlowLogo from "./icons/Logo";

export default function Header() {
  return (
    <div className="header-wrapper">
      <Link to="/">
        <MindFlowLogo />
      </Link>
      <nav className="header-nav">
        <Link to="/counters">Counters</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
}
