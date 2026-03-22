import { apiClient } from "../../lib/axios.ts";

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export const loginUser = async (
  credentials: AuthCredentials,
): Promise<AuthResponse> => {
  const { data } = await apiClient.post<AuthResponse>(
    "/api/auth/login",
    credentials,
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
  return data.user;
};

export const logoutUser = async (): Promise<void> => {
  await apiClient.post("/api/auth/logout");
};
