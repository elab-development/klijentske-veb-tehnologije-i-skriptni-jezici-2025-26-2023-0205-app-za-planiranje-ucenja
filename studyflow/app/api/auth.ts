import { apiRequest } from "./client";

import { User, type UserData } from "~/models/User";

export type AuthResponse = {
  user: UserData;
  token: string;
};

export type RegisterPayload = {
  fullName: string;
  email: string;
  password: string;
  universityName: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export async function registerUser(data: RegisterPayload) {
  const response = await apiRequest<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return {
    ...response,
    user: new User(response.user),
  };
}

export async function loginUser(data: LoginPayload) {
  const response = await apiRequest<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return {
    ...response,
    user: new User(response.user),
  };
}