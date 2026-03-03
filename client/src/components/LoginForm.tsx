import { useLogin } from "../hooks/useAuth";

export function LoginForm() {
  const login = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    login.mutate({
      email: data.get("email") as string,
      password: data.get("password") as string,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      {login.isError && (
        <p>{login.error?.message ?? "Login failed. Try again."}</p>
      )}
      <button type="submit" disabled={login.isPending}>
        {login.isPending ? "Signing in ..." : "Sign In"}
      </button>
    </form>
  );
}
