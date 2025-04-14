import React from "react";

type FormContextType = {
  isFormDirty: boolean;
  setIsFormDirty: React.Dispatch<React.SetStateAction<boolean>>;
};

export type FormContextProviderProps = {
  children: React.ReactNode;
};

export const FormContext = React.createContext({} as FormContextType);

export default function FormContextProvider({
  children,
}: FormContextProviderProps) {
  const [isFormDirty, setIsFormDirty] = React.useState(false);
  const contextValue = React.useMemo(() => {
    return { isFormDirty, setIsFormDirty };
  }, [isFormDirty, setIsFormDirty]);
  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
}
