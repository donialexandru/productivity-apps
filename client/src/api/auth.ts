import { apiClient } from "./client";

export interface LoginCredentials {
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
  credentials: LoginCredentials,
): Promise<AuthResponse> => {
  const { data } = await apiClient.post<AuthResponse>(
    "/auth/login",
    credentials,
  );
  return data;
};

export const getMe = async (): Promise<User> => {
  const { data } = await apiClient.get<User>("/auth/me");
  return data;
};

export const logoutUser = async (): Promise<void> => {
  await apiClient.post("/auth/logout");
};
