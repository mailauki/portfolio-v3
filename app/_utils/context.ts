"use client";

import type { Dispatch, SetStateAction } from "react";

import { createContext, useContext } from "react";

export const Context = createContext({
  darkMode: false,
  setDarkMode: undefined as unknown as Dispatch<SetStateAction<boolean>>,
});

export function useDarkModeContext() {
  return useContext(Context);
}
