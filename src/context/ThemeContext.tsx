import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = () => {
  const [ theme, setTheme ] = useState();

  return (
    <ThemeContext.Provider value={data}></ThemeContext.Provider>
  )
}

export { ThemeProvider };
export default ThemeContext;