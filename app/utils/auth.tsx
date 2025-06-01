"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useCallback, useState, createContext } from "react";
import * as jose from "jose";
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
      const payload: any = jose.decodeJwt(token);
      if (!payload.scopes.includes("admin"))
        throw new Error("You do not have access");
      // const response = await fetchInstance("account/login", {
      //   method: "GET",
      // });
      setIsAuthenticated(true);
      // return response.data;
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
        const payload: any = jose.decodeJwt(response.access_token);
        if (!payload.scopes.includes("admin"))
          throw new Error("You do not have access");
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
      {loading ? "Loading..." : children}
    </UserContext.Provider>
  );
}
