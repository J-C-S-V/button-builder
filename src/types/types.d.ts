import type { CSSProperties } from "react";

export type ButtonStyleItem = {
  id: number;
  name: string;
  style: CSSProperties;
};

export type FormData = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export type GlobalContextType = {
  isModalSignUp: boolean;
  isModalSignIn: boolean;
  handleShowModalSignUp: () => void;
  handleShowModalSignIn: () => void;
};
