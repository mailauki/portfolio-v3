'use client';

import { createContext, useContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export const Context = createContext({ darkMode: false, setDarkMode: undefined as unknown as Dispatch<SetStateAction<boolean>> });

export function useDarkModeContext() {
  return useContext(Context);
}
