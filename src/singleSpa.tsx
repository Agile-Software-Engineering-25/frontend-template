import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import { cssLifecycleFactory } from 'vite-plugin-single-spa/ex';
import App from './App';
import { setGlobalUser } from './hooks/useUser';

const lifecycle = singleSpaReact({
  React,
  ReactDOMClient,
  errorBoundary(err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return <div>Error: {message}</div>;
  },
  rootComponent: (props: any) => {
    // Get user via function provided by the root
    const { getUser, ...appProps } = props;

    // Set user data globally for the hook
    setGlobalUser(getUser ? getUser() : null);

    // Pass only non-user props to App
    return <App {...appProps} />;
  },
});

// IMPORTANT: Because the file is named singleSpa.tsx, the string 'singleSpa'
// must be passed to the call to cssLifecycleFactory.
const cssLc = cssLifecycleFactory('singleSpa' /* optional factory options */);

let removeAuthListener: (() => void) | undefined;

export const bootstrap = [cssLc.bootstrap, lifecycle.bootstrap];

export const mount = [
  cssLc.mount,
  async (props: any) => {
    // Subscribe to auth updates from root (token refresh, login, logout)
    const handler = (e: Event) => {
      if (e instanceof CustomEvent) {
        setGlobalUser(e.detail ?? null);
      } else {
        setGlobalUser(null);
      }
    };
    window.addEventListener('auth:user-changed', handler);
    removeAuthListener = () => window.removeEventListener('auth:user-changed', handler);

    await lifecycle.mount(props);
  },
];

export const unmount = [
  async (props: any) => {
    // Cleanup listener
    removeAuthListener?.();
    removeAuthListener = undefined;

    await lifecycle.unmount(props);
  },
  cssLc.unmount,
];