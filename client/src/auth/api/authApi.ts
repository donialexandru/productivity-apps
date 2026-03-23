import { apiClient } from "../../lib/axios.ts";
import type { AuthCredentials, AuthResponse, User } from "../types.ts";
import { loginInputSchema } from "../../../../shared/src/index.ts";

export const loginUser = async (credentials): Promise<AuthResponse> => {
  const { data } = await apiClient.post<AuthResponse>(
    "/api/auth/login",
    loginInputSchema.parse(credentials),
  );

  return data;
};

export const registerUser = async (
  credentials: AuthCredentials,
): Promise<AuthResponse> => {
  const { data } = await apiClient.post<AuthResponse>(
    "/api/auth/register",
    credentials,
  );
  return data;
};
export const getMe = async (): Promise<User> => {
  const { data } = await apiClient.get<User>("/api/auth/me");
  return data;
};

export const logoutUser = async (): Promise<void> => {
  await apiClient.post("/api/auth/logout");
};
