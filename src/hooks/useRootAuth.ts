import { useEffect, useRef, useState } from 'react';

interface AuthData {
  token: string | null;
  user: {
    id: string | null;
    name: string | null;
    email: string | null;
  };
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export const useRootAuth = () => {
  const [auth, setAuth] = useState<AuthData | null>(null);
  const requestSent = useRef(false);

  useEffect(() => {
    if (requestSent.current) return;

    const handleAuthResponse = (event: CustomEvent) => {
      //console.log('Auth response received:', event.detail);
      setAuth(event.detail);
    };

    const handleAuthUpdate = (event: CustomEvent) => {
      //console.log('Auth update received:', event.detail);
      setAuth(event.detail);
    };

    window.addEventListener(
      'root-auth-response',
      handleAuthResponse as EventListener
    );
    window.addEventListener(
      'root-auth-update',
      handleAuthUpdate as EventListener
    );

    window.dispatchEvent(
      new CustomEvent('request-auth-data', {
        detail: {
          appName: '@agile-software-engineering/frontend-template',
        },
      })
    );

    requestSent.current = true;

    return () => {
      window.removeEventListener(
        'root-auth-response',
        handleAuthResponse as EventListener
      );
      window.removeEventListener(
        'root-auth-update',
        handleAuthUpdate as EventListener
      );
    };
  }, []);

  return auth;
};
