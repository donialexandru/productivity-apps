import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { loginUser, getMe, logoutUser, registerUser } from "../api/auth";
import { useAuthContext } from "../contexts/AuthContext";

export function useLogin() {
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setAuth(data.token, data.user);
      queryClient.setQueryData(["user"], data.user);
      navigate({ to: "/dashboard" });
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
}

export function useRegister() {
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setAuth(data.token, data.user);
      queryClient.setQueryData(["user"], data.user);
      navigate({ to: "/dashboard" });
    },
    onError: (error) => {
      console.error("Register failed:", error);
    },
  });
}

export function useLogout() {
  const { clearAuth } = useAuthContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      clearAuth();
      queryClient.clear();
      navigate({ to: "/login" });
    },
    onSettled: () => {
      clearAuth();
      queryClient.clear();
    },
  });
}

export function useCurrentUser() {
  const { isAuthenticated } = useAuthContext();

  return useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: false,
  });
}
