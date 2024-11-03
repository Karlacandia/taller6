import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Importa el contexto

function Contenido() {
  const { tema, alternarTema } = useContext(ThemeContext); // Accede al contexto

  const estilo = {
    backgroundColor: tema === 'claro' ? '#ffffff' : '#333333', // Color de fondo
    color: tema === 'claro' ? '#000000' : '#ffffff', // Color del texto
    padding: '20px',
    textAlign: 'center',
    height: '100 vh',
  };

  return (
    <div style={estilo}>
      <h1>Contenido</h1>
      <button onClick={alternarTema}>Cambiar tema</button>
    </div>
  );
}

export default Contenido;
