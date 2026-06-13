import { apiRequest } from "./client";

export type AuthUser = {
  id: string;
  full_name: string;
  email: string;
  biography: string | null;
  university_name: string;
  profile_pic_url: string | null;
  created_at: string;
  updated_at: string;
};

export type AuthResponse = {
  user: AuthUser;
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

export function registerUser(data: RegisterPayload) {
  return apiRequest<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function loginUser(data: LoginPayload) {
  return apiRequest<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}