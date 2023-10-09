'use client'

import { createContext, useContext, useState } from 'react'

export const Context = createContext({ darkMode: false, setDarkMode: null });

export function ContextWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Context.Provider value={{ darkMode: darkMode, setDarkMode: setDarkMode }}>
      {children}
    </Context.Provider>
  )
}

export function useDarkModeContext() {
  return useContext(Context);
}