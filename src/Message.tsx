import React, { createContext, useState } from "react";

export interface Value {
  currentName: string;
  message: string;
  setCurrentName: (newName: string) => void;
}

export const Context = createContext<Value>(null as any);

interface ProviderProps {
  children: React.ReactNode;
  name: string;
}

export const Provider = ({ children, name }: ProviderProps) => {
  const [currentName, setCurrentName] = useState(name);

  return (
    <Context.Provider
      value={{ currentName, message: `Hello ${currentName}`, setCurrentName }}
    >
      {children}
    </Context.Provider>
  );
};

export const Consumer = Context.Consumer;
