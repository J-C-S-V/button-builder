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

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}
