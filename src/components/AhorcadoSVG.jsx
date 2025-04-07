import React from "react";

const AhorcadoSVG = ({ errores }) => {
  return (
    <svg height="250" width="200" className="my-6">
      {/* Base */}
      <line x1="10" y1="240" x2="150" y2="240" stroke="#333" strokeWidth="4" />
      {/* Poste vertical */}
      <line x1="50" y1="240" x2="50" y2="20" stroke="#333" strokeWidth="4" />
      {/* Poste superior */}
      <line x1="50" y1="20" x2="130" y2="20" stroke="#333" strokeWidth="4" />
      {/* Cuerda */}
      <line x1="130" y1="20" x2="130" y2="50" stroke="#333" strokeWidth="4" />

      {/* Cabeza */}
      {errores > 0 && (
        <circle
        cx="140"
        cy="70"
        r="20"
        className={`transition-all duration-500 ease-out ${errores > 0 ? "opacity-100" : "opacity-0"}`}/>
      )}

      {/* Cuerpo */}
      {errores > 1 && (
        <line x1="130" y1="90" x2="130" y2="150" stroke="#000" strokeWidth="4" />
      )}

      {/* Brazo izquierdo */}
      {errores > 2 && (
        <line x1="130" y1="100" x2="110" y2="130" stroke="#000" strokeWidth="4" />
      )}

      {/* Brazo derecho */}
      {errores > 3 && (
        <line x1="130" y1="100" x2="150" y2="130" stroke="#000" strokeWidth="4" />
      )}

      {/* Pierna izquierda */}
      {errores > 4 && (
        <line x1="130" y1="150" x2="110" y2="180" stroke="#000" strokeWidth="4" />
      )}

      {/* Pierna derecha */}
      {errores > 5 && (
        <line x1="130" y1="150" x2="150" y2="180" stroke="#000" strokeWidth="4" />
      )}
    </svg>
  );
};

export default AhorcadoSVG;
