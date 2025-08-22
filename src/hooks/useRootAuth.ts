import { useEffect, useRef, useState } from 'react';

import type { AuthContextProps } from 'react-oidc-context';


export const useRootAuth = () => {
  const [auth, setAuth] = useState<AuthContextProps | null>(null);
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
            window.removeEventListener('root-auth-update', handleAuthUpdate as EventListener);
        };
    }, []);

    return auth;
};
