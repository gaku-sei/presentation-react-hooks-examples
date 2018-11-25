import React, { createContext } from "react";

import { useFetch, UseFetchReturnType } from "./hooks/useFetch";

interface User {
  email: string;
  id: number;
}

// We know the Value passed to the Context will be exactly the value returned by the Hook
type Value = UseFetchReturnType<User>;

// We export the Context so it can be used with `useContext`
export const Context = createContext<Value>(null as any);

// The props are similar to the hook arguments
interface Props {
  children?: React.ReactNode;
}

// The consumer does not need any customization here
export const Consumer = Context.Consumer;

export const Provider = ({ children }: Props) => {
  const value: Value = useFetch<User>(
    "https://jsonplaceholder.typicode.com/users/5"
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
