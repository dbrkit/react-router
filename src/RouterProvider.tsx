import React, { PropsWithChildren, createContext } from "react";

export interface RouterContextInterface {
  components?: {
    Link: React.ElementType<PropsWithChildren<any>>;
  };
  router?: { locale: string; push: any; replace: any };
  useRouter?: any;
}

export const RouterContext = createContext<RouterContextInterface>({});

export default function RouterProvider({
  children,
  components,
  router,
  useRouter,
}: PropsWithChildren<RouterContextInterface>) {
  return (
    <RouterContext.Provider value={{ components, router, useRouter }}>
      {children}
    </RouterContext.Provider>
  );
}
