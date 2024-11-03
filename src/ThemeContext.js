import React, { createContext, useState } from 'react';

// Creamos el contexto de tema
export const ThemeContext = createContext();

// Proveedor del contexto de tema
export function ThemeProvider({ children }) {
  const [tema, setTema] = useState('claro'); // Estado inicial del tema

  // Función para alternar entre tema claro y oscuro
  const alternarTema = () => {
    setTema((prevTema) => (prevTema === 'claro' ? 'oscuro' : 'claro'));
  };

  // Devolvemos el proveedor con el valor del contexto
  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}
