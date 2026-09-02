"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { API_BASE_URL, getStoredAuthToken, setStoredAuthToken, clearStoredAuthToken } from "@/lib/api";

export interface AuthUser {
  id: string;
  email: string;
  role: "admin" | "member";
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  isEmailVerified: boolean;
}

export type AuthModalMode = "signin" | "signup" | "forgot";

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  rememberedEmail: string;
  authModalOpen: boolean;
  authModalMode: AuthModalMode;
  openAuthModal: (mode?: AuthModalMode) => void;
  closeAuthModal: () => void;
  setAuthModalMode: (mode: AuthModalMode) => void;
  login: (email: string, password: string) => Promise<AuthUser>;
  signup: (email: string, password: string) => Promise<{ user: AuthUser; message: string }>;
  logout: () => void;
  verifyEmailToken: (token: string) => Promise<void>;
  resendVerification: (email?: string) => Promise<void>;
  requestPasswordReset: (email: string) => Promise<void>;
  resetPasswordWithToken: (token: string, password: string) => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const REMEMBERED_EMAIL_KEY = "bendel_remembered_email";
const USER_DATA_KEY = "bendel_user_data";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [rememberedEmail, setRememberedEmail] = useState<string>("");
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<AuthModalMode>("signin");

  // Load initial auth state on client mount
  useEffect(() => {
    try {
      const storedToken = getStoredAuthToken();
      const storedUser = localStorage.getItem(USER_DATA_KEY);
      const storedEmail = localStorage.getItem(REMEMBERED_EMAIL_KEY) || "";

      setRememberedEmail(storedEmail);

      if (storedToken) {
        setToken(storedToken);
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser));
          } catch {
            // invalid json, ignore
          }
        }
        // Fetch fresh user profile from backend
        fetchCurrentUser(storedToken);
      } else {
        setIsLoading(false);
      }
    } catch {
      setIsLoading(false);
    }
  }, []);

  const fetchCurrentUser = async (jwtToken: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const json = await res.json();
        const userData: AuthUser = json.data || json;
        setUser(userData);
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
        if (userData.email) {
          setRememberedEmail(userData.email);
          localStorage.setItem(REMEMBERED_EMAIL_KEY, userData.email);
        }
      } else if (res.status === 401) {
        // Token expired or invalid
        clearStoredAuthToken();
        localStorage.removeItem(USER_DATA_KEY);
        setToken(null);
        setUser(null);
      }
    } catch {
      // Backend might be offline; retain cached user
    } finally {
      setIsLoading(false);
    }
  };

  const openAuthModal = useCallback((mode: AuthModalMode = "signin") => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setAuthModalOpen(false);
  }, []);

  const login = async (email: string, password: string): Promise<AuthUser> => {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) {
      throw new Error(json?.message || "Invalid email or password.");
    }

    const data = json.data || json;
    const jwtToken = data.token;
    const userData: AuthUser = data.user;

    setStoredAuthToken(jwtToken);
    setToken(jwtToken);
    setUser(userData);
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));

    const savedEmail = userData.email || email.trim().toLowerCase();
    setRememberedEmail(savedEmail);
    localStorage.setItem(REMEMBERED_EMAIL_KEY, savedEmail);

    closeAuthModal();
    return userData;
  };

  const signup = async (email: string, password: string) => {
    const res = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) {
      throw new Error(json?.message || "Unable to register account.");
    }

    const data = json.data || json;
    const jwtToken = data.token;
    const userData: AuthUser = data.user;

    if (jwtToken) {
      setStoredAuthToken(jwtToken);
      setToken(jwtToken);
      setUser(userData);
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
    }

    const savedEmail = userData.email || email.trim().toLowerCase();
    setRememberedEmail(savedEmail);
    localStorage.setItem(REMEMBERED_EMAIL_KEY, savedEmail);

    return {
      user: userData,
      message: data.message || "Registration successful! A verification email has been sent.",
    };
  };

  const logout = useCallback(() => {
    clearStoredAuthToken();
    localStorage.removeItem(USER_DATA_KEY);
    setToken(null);
    setUser(null);
  }, []);

  const verifyEmailToken = async (verifyToken: string) => {
    const res = await fetch(`${API_BASE_URL}/auth/verify-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: verifyToken }),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) {
      throw new Error(json?.message || "Verification failed or token expired.");
    }

    if (user) {
      const updated = { ...user, isEmailVerified: true };
      setUser(updated);
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(updated));
    }
  };

  const resendVerification = async (targetEmail?: string) => {
    const emailToSend = targetEmail || user?.email || rememberedEmail;
    if (!emailToSend) {
      throw new Error("Please specify an email address.");
    }

    const res = await fetch(`${API_BASE_URL}/auth/resend-verification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ email: emailToSend.trim().toLowerCase() }),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) {
      throw new Error(json?.message || "Failed to resend verification email.");
    }
  };

  const requestPasswordReset = async (email: string) => {
    const res = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim().toLowerCase() }),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) {
      throw new Error(json?.message || "Failed to send reset link.");
    }
  };

  const resetPasswordWithToken = async (resetToken: string, newPassword: string) => {
    const res = await fetch(`${API_BASE_URL}/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: resetToken, password: newPassword }),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) {
      throw new Error(json?.message || "Failed to reset password.");
    }
  };

  const refreshUser = async () => {
    if (token) {
      await fetchCurrentUser(token);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        rememberedEmail,
        authModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        setAuthModalMode,
        login,
        signup,
        logout,
        verifyEmailToken,
        resendVerification,
        requestPasswordReset,
        resetPasswordWithToken,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
