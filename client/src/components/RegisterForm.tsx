import { useState } from "react";
import { useRegister } from "../hooks/useAuth";

export function RegisterForm() {
  const register = useRegister();
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("password") !== data.get("confirmPassword")) {
      setError(true);
      return;
    }
    register.mutate({
      email: data.get("email") as string,
      password: data.get("password") as string,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <input name="email" type="email" placeholder="Email" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        {error && <p>Passwords must be identical</p>}
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
        />
        {register.isError && (
          <p>{register.error?.message ?? "Register failed. Try again."}</p>
        )}
      </div>
      <button type="submit" disabled={register.isPending}>
        {register.isPending ? "Registering ..." : "Register"}
      </button>
    </form>
  );
}
