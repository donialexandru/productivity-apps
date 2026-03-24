import { apiClient } from "../../lib/axios.ts";
import type { AuthCredentials, User } from "../types.ts";
import {
  loginInputSchema,
  type LoginInput,
  type AuthResponse,
  authResponseSchema,
} from "../../../../shared/src/index.ts";

export const loginUser = async (
  credentials: LoginInput,
): Promise<AuthResponse> => {
  const validatedCredentials = loginInputSchema.parse(credentials);
  const { data } = await apiClient.post<AuthResponse>(
    "/api/auth/login",
    validatedCredentials,
  );

  const validatedData = authResponseSchema.parse(data);

  return validatedData;
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
