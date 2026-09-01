export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api";

export function getStoredAuthToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("bendel_auth_token");
}

export function setStoredAuthToken(token: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem("bendel_auth_token", token);
}

export function clearStoredAuthToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("bendel_auth_token");
}

export async function apiRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = getStoredAuthToken();
  const headers = new Headers(init.headers ?? {});

  if (!(init.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers,
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    const message = payload?.message ?? "The request could not be completed.";
    throw new Error(message);
  }

  return (payload && "data" in payload ? payload.data : payload) as T;
}
