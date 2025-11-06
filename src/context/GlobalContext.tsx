import { createContext, useContext, useState, type ReactNode } from "react";
import type { GlobalContextType } from "../types/types.d.ts";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalSignUp, setIsModalSignUp] = useState(false);
  const [isModalSignIn, setIsModalSignIn] = useState(false);

  const handleShowModalSignUp = () => {
    setIsModalSignUp(!isModalSignUp);
  };

  const handleShowModalSignIn = () => {
    setIsModalSignIn(!isModalSignIn);
  };

  const data = {
    isModalSignUp,
    isModalSignIn,
    handleShowModalSignUp,
    handleShowModalSignIn,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobal = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
