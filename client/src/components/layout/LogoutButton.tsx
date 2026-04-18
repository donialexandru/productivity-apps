import { useLogout } from "../../auth/hooks/useAuth";

function LogoutButton() {
  const logout = useLogout();
  return (
    <button onClick={() => logout.mutate()}>
      {logout.isPending ? "Logging out..." : "Logout"}
    </button>
  );
}

export default LogoutButton;
