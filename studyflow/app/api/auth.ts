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

export type UpdateUserPayload = {
  full_name: string;
  biography: string | null;
  university_name: string;
  profile_pic_url: string | null;
};

export async function registerUser(data: RegisterPayload) {
  const response = await apiRequest<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return {
    ...response
  };
}

export async function loginUser(data: LoginPayload) {
  const response = await apiRequest<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return {
    ...response
  };
}

export function updateCurrentUser(data: UpdateUserPayload) {
  return apiRequest<UserData>("/auth/me", {
    method: "PUT",
    body: JSON.stringify(data),
  });
}