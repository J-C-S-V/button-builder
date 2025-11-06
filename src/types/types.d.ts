import type { CSSProperties } from "react";

export type ButtonStyleItem = {
  id: number;
  name: string;
  style: CSSProperties;
};

export interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
}
