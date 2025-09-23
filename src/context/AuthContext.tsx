import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { User } from 'oidc-client-ts';
import { AUTH_USER_CHANGED_EVENT } from '@/constants/events';

type GetUserFn = () => User | null;

type AuthContextValue = {
  user: User | null;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({
  children,
  getUser,
}: {
  children: React.ReactNode;
  getUser?: GetUserFn;
}) {
  // initialize from root getUser (single-spa)
  const [user, setUser] = useState<User | null>(() => {
    return getUser ? getUser() : null;
  });

  // Listen to global auth change events (dispatched by root)
  useEffect(() => {
    const handler = (e: Event) => {
      if (e instanceof CustomEvent) {
        setUser(e.detail ?? null);
      } else {
        setUser(null);
      }
    };
    window.addEventListener(AUTH_USER_CHANGED_EVENT, handler);
    return () => window.removeEventListener(AUTH_USER_CHANGED_EVENT, handler);
  }, []);

  const value = useMemo(() => ({ user }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useUser/AuthContext: Missing <AuthProvider>');
  return ctx;
}

export default AuthContext;
