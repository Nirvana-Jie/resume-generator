import React, { useContext, useState } from 'react';

export interface Context {
  name: string;
  setName: (val: string) => void;
}

const defaultContext = {
  name: '简历测试',
  setName: () => {},
} as Context;

const context = React.createContext(defaultContext);

const { Provider } = context;

export const ContextWrapper = ({ children }: { children: any }) => {
  const [name, setName] = useState(defaultContext.name);
  return <Provider value={{ name, setName }}>{children}</Provider>;
};

export const useAppContext = () => useContext(context);
