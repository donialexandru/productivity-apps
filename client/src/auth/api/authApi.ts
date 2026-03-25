import { apiClient } from "../../lib/axios.ts";
import {
  loginInputSchema,
  type LoginInput,
  type AuthResponse,
  type User,
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

export const registerUser = async (credentials: LoginInput) => {
  const validatedCredentials = loginInputSchema.parse(credentials);
  const { data } = await apiClient.post<AuthResponse>(
    "/api/auth/register",
    validatedCredentials,
  );
  const validatedData = authResponseSchema.parse(data);

  return validatedData;
};

export const getMe = async (): Promise<User> => {
  const { data } = await apiClient.get<User>("/api/auth/me");
  return data;
};

export const logoutUser = async (): Promise<void> => {
  await apiClient.post("/api/auth/logout");
};
