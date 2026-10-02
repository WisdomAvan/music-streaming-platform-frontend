import { mockLoginUser } from "./mockAuthApi";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USE_MOCKS = import.meta.env.VITE_USE_MOCKS === "true";

export class AuthError extends Error {
  constructor(status, body) {
    super(body?.message || "Authentication failed");
    this.status = status;
    this.body = body;
  }
}

export async function loginUser(email, password) {
  if (USE_MOCKS) {
    try {
      return await mockLoginUser(email, password);
    } catch (err) {
      throw new AuthError(err.status, err.body);
    }
  }

  const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new AuthError(response.status, data);
  }

  return data; // { userId, accessToken, refreshToken, message }
}