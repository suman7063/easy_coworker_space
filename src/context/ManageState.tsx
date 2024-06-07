import React, {
  createContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

// Define the shape of your context's value
interface ContextValue {
  value: [];
  setValue: any;
}

const defaultValue: ContextValue = {
  value: [],
  setValue: () => {},
};

const cardContext = createContext<ContextValue>(defaultValue);

interface Props {
  children: JSX.Element;
}

const CardContextProvider = ({ children }: Props) => {
  const [value, setValue] = useState([] as any);

  return (
    <cardContext.Provider value={{ value, setValue }}>
      {children}
    </cardContext.Provider>
  );
};

export { cardContext, CardContextProvider };
