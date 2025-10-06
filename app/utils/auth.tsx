"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Loader2 } from "lucide-react";
import { createContext, useCallback, useEffect, useState } from "react";

import fetchInstance from "./api";

interface UserContextType {
  login: (token: string) => Promise<any>;
  logout: () => void;
  loading: boolean;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextType | null>(null);

export { UserContext };

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = useCallback(() => {
    localStorage.removeItem("auth-token");
    setIsAuthenticated(false);
  }, []);

  const login = useCallback(async (token: string) => {
    try {
      localStorage.setItem("auth-token", token);
      setIsAuthenticated(true);
    } catch (err) {
      localStorage.removeItem("auth-token");
      throw err;
    }
  }, []);
  useEffect(() => {
    const handler = async () => {
      const token = localStorage.getItem("auth-token");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetchInstance("account/refresh", {
          method: "POST",
        });
        localStorage.setItem("auth-token", response.access_token);
        setLoading(false);
        setIsAuthenticated(true);
      } catch (err) {
        console.error(err);
        logout();
        setLoading(false);
      }
    };
    let timer: number;
    handler().then(() => {
      timer = window.setInterval(handler, 30000);
    });

    return () => {
      window.clearInterval(timer);
    };
  }, [logout]);
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      login(token)
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [login]);
  return (
    <UserContext.Provider value={{ login, logout, loading, isAuthenticated }}>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
}
